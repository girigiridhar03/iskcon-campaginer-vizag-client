import CustomCard from "../utils/CustomCard";
import CustomCardSkeleton from "../utils/CustomCardSkeleton";
import { useSelector } from "react-redux";

const CardSection = () => {
  const { campainersCount, campaginers, campainerLoading } = useSelector(
    (state) => state.campaginer,
  );
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-semibold">
        Campaigners Supporting This Seva ({campainersCount})
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch mb-3">
        {campainerLoading ? (
          Array.from({ length: 4 })?.map((_, index) => (
            <CustomCardSkeleton key={index} />
          ))
        ) : campaginers?.length > 0 ? (
          campaginers?.map((campaginer,index) => (
            <CustomCard key={campaginer?._id} campainer={campaginer} index={index} />
          ))
        ) : (
          <p>No Campaigners Found.</p>
        )}
      </div>
    </section>
  );
};

export default CardSection;
