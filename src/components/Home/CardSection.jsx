import React from "react";
import CustomCard from "../utils/CustomCard";
import { Button } from "../ui/button";

const CardSection = () => {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-semibold">
        Campaigners Supporting This Seva
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>

      <div className="mt-6 flex justify-center">
        <Button variant="outline">View All Campaigners</Button>
      </div>
    </section>
  );
};

export default CardSection;
