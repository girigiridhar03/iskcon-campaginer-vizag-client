import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CampaignerDetailsModal = ({ campaigner, onClose }) => {
  if (!campaigner) return null;

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Campaigner Details</DialogTitle>
        </DialogHeader>

        {/* IMAGE */}
        {campaigner?.image?.url && (
          <div className="flex justify-center mb-4">
            <img
              src={campaigner.image.url}
              alt={campaigner.name}
              className="w-28 h-28 object-cover rounded-lg border"
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <Detail label="Campaigner Name" value={campaigner?.name} />

          <Detail label="Phone Number" value={campaigner?.phoneNumber} />

          <Detail
            label="Campaign"
            value={campaigner?.campaignId?.title ?? "N/A"}
          />

          <Detail
            label="Campaign Target"
            value={`₹${campaigner?.campaignId?.targetAmount?.toLocaleString(
              "en-IN",
            )}`}
          />

          <Detail
            label="Campaign Raised"
            value={`₹${campaigner?.campaignId?.raisedAmount?.toLocaleString(
              "en-IN",
            )}`}
          />

          <Detail
            label="Campaign Progress"
            value={`${campaigner?.campaignId?.percentage ?? 0}%`}
          />

          <Detail
            label="Campaigner Target"
            value={`₹${campaigner?.targetAmount?.toLocaleString("en-IN")}`}
          />

          <Detail
            label="Campaigner Raised"
            value={`₹${campaigner?.raisedAmount?.toLocaleString("en-IN")}`}
          />

          <Detail label="Funders" value={campaigner?.funderCount ?? 0} />

          <Detail label="Status" value={campaigner?.status} />

          <Detail
            label="Temple Devotee"
            value={campaigner?.templeDevoteInTouch?.devoteName}
          />

          <Detail
            label="Devotee Phone"
            value={campaigner?.templeDevoteInTouch?.phoneNumber}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CampaignerDetailsModal;

function Detail({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-muted-foreground text-xs">{label}</span>
      <span className="font-medium">{value || "-"}</span>
    </div>
  );
}
