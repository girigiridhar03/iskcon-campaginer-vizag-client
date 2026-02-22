import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function DonationDialog({ open, onOpenChange, inputValue }) {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    pan: "",
    tax: false,
    anonymous: false,
  });
  const [error, setError] = useState({});

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setError((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (formData.tax && !formData.pan.trim()) {
      newErrors.pan = "PAN number is required for 80G exemption";
    }

    setError(newErrors);

    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) return;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg rounded-3xl p-0 overflow-hidden">
        <DialogHeader className="px-6 py-5 bg-muted">
          <DialogTitle className="text-lg font-semibold">
            Donation Summary
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            You are contributing{" "}
            <span className="font-bold text-primary">₹{inputValue}</span>
          </p>
        </DialogHeader>

        <div className="px-6 py-6 space-y-6">
          {/* Personal Info */}
          <div className="space-y-3">
            <Input
              placeholder="Full Name *"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            {error?.name && <p className="text-destructive pl-2 text-sm">{error?.name}</p>}

            <Input
              placeholder="Mobile Number *"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
            {error?.phoneNumber && (
              <p className="text-destructive pl-2 text-sm">{error?.phoneNumber}</p>
            )}

            <Input
              placeholder="Email (Optional)"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          {/* Options */}
          <div className="space-y-4 rounded-2xl border border-border p-4">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={formData.tax}
                onCheckedChange={(v) => handleChange("tax", v === true)}
              />
              <Label className="text-sm">Claim 80G Tax Exemption</Label>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                checked={formData.anonymous}
                onCheckedChange={(v) => handleChange("anonymous", v === true)}
              />
              <Label className="text-sm">Make my donation anonymous</Label>
            </div>
          </div>

          {/* PAN */}
          {formData.tax && (
            <>
              <Input
                placeholder="PAN Number *"
                value={formData.pan}
                onChange={(e) => handleChange("pan", e.target.value)}
              />
              {error?.pan && <p className="text-destructive pl-2 text-sm">{error?.pan}</p>}
            </>
          )}

          {/* CTA */}
          <Button
            className="
              w-full h-12 text-base font-semibold rounded-xl
              bg-linear-to-r from-primary to-primary/90
              text-primary-foreground
              shadow-md hover:shadow-lg
            "
            onClick={handleSubmit}
          >
            🔒 Pay Securely
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            100% secure payments • PCI-DSS compliant
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
