import { useSelector } from "react-redux";
import CampaignDonatePanel from "./CampaignerDonatePanel";

const CampaignSideBySide = () => {
  const { singleCampaignerDetails } = useSelector((state) => state.campaginer);
  const { sevaList, sevaLoading } = useSelector((state) => state.seva);

  return (
    <section className="py-1 w-full">
      <div
        className="
          w-full mx-auto max-w-7xl
          grid grid-cols-1 lg:grid-cols-2
          gap-10
          items-stretch
        "
      >
        <div
          className="
            h-full
            flex flex-col
            rounded-3xl
            overflow-hidden
            bg-card
            shadow-xl
            border border-border
          "
        >
          <div className="relative h-95 bg-muted shrink-0">
            <div
              className="
                absolute inset-0
               bg-linear-to-br
                from-primary/10
                via-transparent
                to-secondary/10
              "
            />
            <img
              src={singleCampaignerDetails?.campaginers?.image?.url}
              alt={`Campaigner-${singleCampaignerDetails?.campaginers?.image?.filename}`}
              className="
                relative z-10
                h-full w-full
                object-contain
                pt-0
              "
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-card to-transparent" />
          </div>
          <div className="flex flex-col flex-1 p-8 space-y-2">
            <h3 className="text-2xl font-bold text-foreground tracking-tight">
              {singleCampaignerDetails?.campaginers?.name}
            </h3>
            <p className="text-sm font-medium text-primary">ISKCON • DEVOTE</p>
            <p className="text-muted-foreground leading-relaxed">
              As a devoted well-wisher, I am leading this sacred campaign to
              support the creation of a magnificent ISKCON{" "}
              <span className="text-primary font-semibold">
                Sri Srinivasa Govinda Temple
              </span>{" "}
              and Cultural Complex in Visakhapatnam
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-4">
              <span
                className="
                  rounded-full
                  bg-muted
                  px-4 py-1.5
                  text-xs font-medium text-muted-foreground
                "
              >
                📍 Vishakapatnam, Gambirm
              </span>

              <span
                className="
                  rounded-full
                  bg-muted
                  px-4 py-1.5
                  text-xs font-medium text-muted-foreground
                "
              >
                🛕 Temple Construction
              </span>
            </div>
          </div>
        </div>

        <CampaignDonatePanel
          details={singleCampaignerDetails}
          sevas={sevaList}
          sevaLoading={sevaLoading}
        />
      </div>
    </section>
  );
};

export default CampaignSideBySide;
