import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CampaignersTable({ campaigners }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = campaigners?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* FILTER BAR */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <Input
          placeholder="Search campaigner..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />

        <Button variant="outline">Export CSV</Button>
      </div>

      {/* TABLE */}
      <div className="rounded-2xl border shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Target</TableHead>
              <TableHead>Raised</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Funders</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filtered?.map((item) => {
              const percentage = Math.round(
                (item.raisedAmount / item.targetAmount) * 100,
              );

              return (
                <TableRow
                  key={item._id}
                  className="hover:bg-muted/40 transition"
                >
                  <TableCell className="font-medium">{item.name}</TableCell>

                  <TableCell>{item.phoneNumber}</TableCell>

                  <TableCell>
                    ₹{item.targetAmount.toLocaleString("en-IN")}
                  </TableCell>

                  <TableCell>
                    ₹{item.raisedAmount.toLocaleString("en-IN")}
                  </TableCell>

                  {/* PROGRESS */}
                  <TableCell className="w-40">
                    <div className="space-y-2">
                      <Progress value={percentage} />
                      <span className="text-xs text-muted-foreground">
                        {percentage}%
                      </span>
                    </div>
                  </TableCell>

                  {/* STATUS */}
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "active" ? "default" : "secondary"
                      }
                      className="capitalize"
                    >
                      {item.status}
                    </Badge>
                  </TableCell>

                  {/* VIEW FUNDERS */}
                  <TableCell>
                    <Button
                      size="sm"
                      onClick={() =>
                        navigate(`/admin/funders?campaignerId=${item._id}`)
                      }
                    >
                      View Funders
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
