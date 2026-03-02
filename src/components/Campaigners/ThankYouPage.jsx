import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ThankYouPage({
  donorName = "Mukunda",
  email = "example@gmail.com",
  amount = 5000,
  transactionId = "pay_SLSk92uB9M7DAh",
  seva = "Subhojanam Seva",
  paymentMethod = "Razorpay",
  date = "1 March 2026",
}) {
  return (
    <div className="min-h-screen bg-[#f5f2ed] flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold">
            Hare Krishna! 🙏
          </h1>
          <p className="text-primary font-medium">
            Thank You for Your Generous Donation
          </p>
        </div>

        {/* Campaign Card */}
        <Card className="rounded-2xl shadow-md border bg-card">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-lg font-semibold">{seva}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your contribution will help provide free nutritious meals to those
              in need through the Hare Krishna Movement’s Subhojanam Seva
              program.
            </p>
            <div className="bg-muted rounded-lg px-4 py-2 text-sm italic text-muted-foreground">
              “Annadanam Mahadanam” – The gift of food is the greatest gift.
            </div>
          </CardContent>
        </Card>

        {/* Amount Card */}
        <div className="rounded-2xl bg-linear-to-r from-orange-500 to-orange-600 text-white text-center py-8 shadow-lg">
          <p className="uppercase text-xs tracking-wider opacity-80">
            Amount Donated
          </p>
          <p className="text-4xl font-bold mt-2">₹{amount}</p>
          <p className="text-sm mt-3 opacity-90">
            May Lord Krishna bless you abundantly
          </p>
        </div>

        {/* Payment Details */}
        <Card className="rounded-2xl shadow-md border bg-card">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Payment Details</h3>

            <div className="divide-y">
              <DetailRow label="Transaction ID" value={transactionId} />

              <DetailRow label="Donor Name" value={donorName} />

              <DetailRow label="Email" value={email} />

              <DetailRow label="Seva" value={seva} />

              <DetailRow label="Payment Method" value={paymentMethod} />

              <DetailRow label="Date" value={date} />
            </div>

            <div className="mt-6 pt-6 border-t flex justify-between items-center">
              <span className="text-lg font-semibold">Total Amount</span>

              <span className="text-2xl font-bold text-yellow-500">
                ₹{amount}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
            Download Receipt
          </Button>

          <Button variant="outline" className="w-full sm:w-auto">
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
      <span className="text-muted-foreground text-sm">{label}</span>

      <span className="font-medium text-foreground text-sm sm:text-base break-all text-left sm:text-right">
        {value}
      </span>
    </div>
  );
}
