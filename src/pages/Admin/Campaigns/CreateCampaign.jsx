import { useState, useMemo } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function CreateCampaign() {
  const [formData, setFormData] = useState({
    title: "",
    targetAmount: "",
    startDate: "",
    endDate: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const duration = useMemo(() => {
    if (!formData.startDate || !formData.endDate) return null;
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : null;
  }, [formData.startDate, formData.endDate]);

  const formattedAmount = useMemo(() => {
    if (!formData.targetAmount) return "";
    return Number(formData.targetAmount).toLocaleString("en-IN");
  }, [formData.targetAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1000));

    setLoading(false);
    alert("Campaign created successfully!");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">
          Create Campaign
        </h1>
        <p className="text-muted-foreground">
          Launch a new fundraising campaign with structured details.
        </p>
      </div>

      {/* Card */}
      <Card className="shadow-lg border border-border transition-all duration-300 hover:shadow-xl">
        <CardHeader>
          <CardTitle className="text-lg">Campaign Information</CardTitle>
          <CardDescription>
            Ensure the campaign details are accurate before submission.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div className="space-y-2">
              <Label>Campaign Title</Label>
              <Input
                name="title"
                placeholder="Temple Renovation Fund"
                value={formData.title}
                onChange={handleChange}
                className="focus-visible:ring-2 focus-visible:ring-primary transition-all"
                required
              />
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Target Amount */}
              <div className="space-y-2">
                <Label>Target Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">
                    ₹
                  </span>
                  <Input
                    name="targetAmount"
                    type="number"
                    placeholder="1500000"
                    className="pl-8 focus-visible:ring-2 focus-visible:ring-primary"
                    value={formData.targetAmount}
                    onChange={handleChange}
                    required
                  />
                </div>

                {formattedAmount && (
                  <p className="text-xs text-muted-foreground">
                    ₹ {formattedAmount}
                  </p>
                )}
              </div>

              {/* Start Date */}
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="focus-visible:ring-2 focus-visible:ring-primary"
                  required
                />
              </div>

              {/* End Date */}
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="focus-visible:ring-2 focus-visible:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Duration Preview */}
            {duration && (
              <div className="p-4 rounded-lg bg-muted border text-sm flex justify-between">
                <span>Campaign Duration</span>
                <span className="font-medium">{duration} days</span>
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-between items-center pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  setFormData({
                    title: "",
                    targetAmount: "",
                    startDate: "",
                    endDate: "",
                  })
                }
              >
                Reset Form
              </Button>

              <Button type="submit" disabled={loading} className="px-6">
                {loading ? "Creating..." : "Create Campaign"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
