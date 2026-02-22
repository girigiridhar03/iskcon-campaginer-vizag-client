import CampaignDonatePanel from "./CampaignerDonatePanel";

const CampaignSideBySide = () => {
  return (
    <section className="py-9 w-full">
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
          <div className="relative h-105 bg-muted shrink-0">
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
              src="https://iskconmangalore.s3.ap-south-1.amazonaws.com/crowdfunding/Gunakara+Rama+Dasa.png"
              alt="Campaigner"
              className="
                relative z-10
                h-full w-full
                object-contain
                pt-1
              "
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-card to-transparent" />
          </div>
          <div className="flex flex-col flex-1 p-8 space-y-2">
            <h3 className="text-2xl font-bold text-foreground tracking-tight">
              Gunakara Rama Dasa
            </h3>
            <p className="text-sm font-medium text-primary">
              ISKCON • Campaign Leader
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a devoted well-wisher, I am leading this sacred campaign to
              support the creation of a magnificent ISKCON Sri Radha Krishna
              Temple and Cultural Complex in the Hubli–Dharwad region of
              Karnataka.
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
                📍 Vishakapatnam
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

        <CampaignDonatePanel />
      </div>
    </section>
  );
};

export default CampaignSideBySide;
