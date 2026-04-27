import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  Wallet,
  Users,
  HeartHandshake,
  Target,
  Crown,
  Award,
  Medal,
} from "lucide-react";
import api from "@/api/api";
import { useDispatch, useSelector } from "react-redux";
import { getCampainer } from "@/store/campaigners/campaigners.service";
import { getCurrentCampaign } from "@/store/campaign/campaign.service";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [summary, setSummary] = useState({});
  const [trend, setTrend] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { campaginers } = useSelector((state) => state.campaginer);
  const { currentCampaign } = useSelector((state) => state.campaign);
  const { details } = useSelector((state) => state.auth);

  const ROUTES = {
    "Total Donations": "/admin/funders",
    "Pending Campaigners": "/admin/campaigner/registrations",
    "Active Campaigners": "/admin/campaigners",
  };

  useEffect(() => {
    dispatch(getCurrentCampaign());
  }, [dispatch]);
  useEffect(() => {
    if (!currentCampaign?._id || !details?.role) return;
    const isDevotee = ["admin", "devotee"].includes(details?.role);

    dispatch(
      getCampainer({
        id: currentCampaign._id,
        status: "active",
        campStatus: "active",
        page: 1,
        pageSize: 10,
        sort: "raised_desc",
        isDevotee,
      }),
    );
  }, [currentCampaign?._id, details?.role, dispatch]);
  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const [summaryRes, trendRes] = await Promise.all([
        api.get("/dashboard/summary"),
        api.get("/dashboard/donation-trend"),
      ]);

      setSummary(summaryRes.data?.data || {});
      setTrend(trendRes.data?.data || []);
    } catch (err) {
      console.error("Dashboard error:", err);
    } finally {
      setLoading(false);
    }
  };

  const sevaBadges = [
    "SEVA SHIROMANI", // Top 1
    "SEVA RATNA", // Top 2
    "SEVA BHUSHAN", // Top 3
    "SEVA VIBHUSHAN", // Top 4
    "SEVA VIBHAVA", // Top 5
    "SEVA SHRESHTA", // Top 6
    "SEVA PRAMUKH", // Top 7
    "SEVA SAMARPIT", // Top 8
    "SEVA SADHAK", // Top 9
    "SEVA BANDHU", // Top 10
  ];

  const topThreeIcons = [<Crown />, <Award />, <Medal />];
  const rankStyles = [
    "text-yellow-500", // 🥇 Gold
    "text-gray-400", // 🥈 Silver
    "text-amber-700", // 🥉 Bronze
  ];

  const icons = {
    "Target Amount": <Target className="h-4 w-4 text-muted-foreground" />,
    "Total Raised": <Wallet className="h-4 w-4 text-muted-foreground" />,
    "Total Donations": (
      <HeartHandshake className="h-4 w-4 text-muted-foreground" />
    ),
    "Active Campaigners": <Users className="h-4 w-4 text-muted-foreground" />,
    "Pending Campaigners": <Users className="h-4 w-4 text-muted-foreground" />,
  };

  return (
    <div className="min-w-0 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground text-sm">
          Campaign performance overview
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {Object.keys(summary)?.map((item) => (
          <Card key={item}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm">{item}</CardTitle>
              {icons?.[item]}
            </CardHeader>
            {ROUTES[item] ? (
              <Link to={ROUTES[item]}>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {loading
                      ? "..."
                      : item === "Target Amount" || item === "Total Raised"
                        ? `₹${summary?.[item]?.toLocaleString("en-IN") || 0}`
                        : `${summary?.[item]?.toLocaleString("en-IN") || 0}`}
                  </div>
                </CardContent>
              </Link>
            ) : (
              <CardContent>
                <div className="text-2xl font-bold">
                  {loading
                    ? "..."
                    : item === "Target Amount" || item === "Total Raised"
                      ? `₹${summary?.[item]?.toLocaleString("en-IN") || 0}`
                      : `${summary?.[item]?.toLocaleString("en-IN") || 0}`}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daily Donation Trend</CardTitle>
        </CardHeader>

        <CardContent>
          {trend.length === 0 ? (
            <div className="text-center text-muted-foreground py-16 text-sm">
              No donation data available
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trend}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="date" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="var(--color-chart-1)"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            {details?.role === "admin" || details?.role === "devotee"
              ? "Top Campaigners"
              : "Top Donors"}
          </CardTitle>
        </CardHeader>

        <CardContent>
          {campaginers?.length === 0 ? (
            <div className="text-center text-muted-foreground py-10 text-sm">
              No campaigner performance data
            </div>
          ) : (
            <>
              <div className="grid gap-3 md:hidden">
                {campaginers?.map((c, i) => {
                  if (c.raisedAmount < 100) return null;
                  return (
                    <div
                      key={c._id || i}
                      className={`rounded-xl border p-4 shadow-sm ${
                        i < 3 ? "bg-primary/5" : "bg-card"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium">#{i + 1} {c.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {sevaBadges[i] || "Campaigner"}
                          </p>
                        </div>
                        {i < 3 && (
                          <span className={`text-lg ${rankStyles[i]}`}>
                            {topThreeIcons[i]}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-lg bg-muted/40 px-3 py-2">
                          <p className="text-xs text-muted-foreground">Target</p>
                          <p className="font-medium">
                            ₹{c.targetAmount?.toLocaleString("en-IN")}
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted/40 px-3 py-2">
                          <p className="text-xs text-muted-foreground">Raised</p>
                          <p className="font-medium text-primary">
                            ₹{c.raisedAmount?.toLocaleString("en-IN")}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <Progress value={c?.percentage} className="h-2 bg-muted" />
                        <span className="text-xs text-muted-foreground">
                          {c?.percentage}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="hidden overflow-x-auto md:block">
            <Table className="min-w-190">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-17.5">Rank</TableHead>
                  <TableHead className="w-40">Name</TableHead>
                  <TableHead className="w-40">Target</TableHead>
                  <TableHead className="w-40">Raised</TableHead>
                  <TableHead className="w-65">Progress</TableHead>
                  <TableHead className="w-65">Badge</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {campaginers?.map((c, i) => {
                  const isTop = i < 3;

                  return (
                    c.raisedAmount >= 100 && (
                      <TableRow
                        key={i}
                        className={isTop ? "bg-primary/5 font-medium" : ""}
                      >
                        <TableCell className="font-semibold">
                          #{i + 1}
                        </TableCell>

                        <TableCell className="font-medium">{c.name}</TableCell>

                        <TableCell>
                          ₹{c.targetAmount?.toLocaleString("en-IN")}
                        </TableCell>

                        <TableCell className="font-semibold text-primary">
                          ₹{c.raisedAmount?.toLocaleString("en-IN")}
                        </TableCell>

                        <TableCell>
                          <div className="flex flex-col gap-1 w-55">
                            <Progress
                              value={c?.percentage}
                              className="h-2 bg-muted"
                            />
                            <span className="text-xs text-muted-foreground">
                              {c?.percentage}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            {i < 3 && c.raisedAmount >= 100 && (
                              <span className={`text-lg ${rankStyles[i]}`}>
                                {topThreeIcons[i]}
                              </span>
                            )}
                            {c.raisedAmount >= 100 ? (
                              <Badge variant="secondary">{sevaBadges[i]}</Badge>
                            ) : (
                              "-"
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  );
                })}
              </TableBody>
            </Table>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
