import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export function DonationCard({ onDonate, inputValue, onInputChnage }) {
  return (
    <Card
      id="donation-card"
      className="gradient-card max-w-xl mx-auto shadow-lg rounded-2xl py-1 border border-primary"
    >
      <CardContent className="p-6 space-y-6">
        <Badge variant="secondary" className="w-fit">
          🇮🇳 Indian Passport / ID holders only
        </Badge>

        <div className="space-y-2">
          <Label>Donation Amount</Label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              ₹
            </span>

            <Input
              type="number"
              placeholder="Minimum 100"
              className="pl-8"
              onChange={(e) => onInputChnage(e.target.value)}
            />
          </div>

          <p className="text-xs text-muted-foreground">
            Minimum contribution ₹100
          </p>
        </div>

        <Button
          disabled={inputValue < 100}
          className="w-full h-12 text-base"
          onClick={onDonate}
        >
          🙏 Contribute Now
        </Button>
      </CardContent>
    </Card>
  );
}
