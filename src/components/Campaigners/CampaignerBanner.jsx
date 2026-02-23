import React from "react";

const CampaignerBanner = () => {
  return (
    <div className="w-[80%] mx-auto boder-2 flex items-center">
      <div className="w-[20%]">
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
          <img
            src="https://cdn.hkmchennai.org/campaigners/rajalakshmirangarajan-52b60982.jpg"
            className="w-full object-cover h-full"
            alt="i"
          />
        </div>
      </div>
      <div className="w-[70%] flex flex-col items-center gap-2.5">
        <span className="text-xl" >A message from the campaigner</span>
        <div className="border-2 border-dotted border-primary rounded-lg px-2 py-8 text-center" >
          <p className="italic text-2xl text-muted-foreground" >
            Lord Krishna says in Bhagavad-Gita 9.27: "Whatever you give in
            charity - do that as an offering to Me."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignerBanner;
