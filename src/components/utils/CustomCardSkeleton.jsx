import { Card, CardContent, CardFooter } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const CustomCardSkeleton = () => {
  return (
    <Card
      className="
        relative
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        bg-card
        shadow-md
        py-0
      "
    >
      <div className="relative w-[96%] mx-auto mt-3 h-80 rounded-xl overflow-hidden">
        <Skeleton className="h-full w-full rounded-xl" />
        <Skeleton className="absolute top-3 left-4 h-12 w-12 rounded-lg" />
        <Skeleton className="absolute top-3 right-3 h-7 w-28 rounded-full" />
      </div>

      <CardContent className="flex-1 px-5 py-3 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[75%]" />
        <div className="flex gap-3 mt-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      </CardContent>

      <CardFooter className="relative px-5 py-5 overflow-hidden rounded-b-2xl border-t border-border">
        <div className="absolute inset-0 bg-muted" />

        <div className="relative z-10 space-y-5 w-full">
          <div className="flex justify-between">
            <div className="space-y-2">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-6 w-28" />
            </div>

            <div className="space-y-2 text-right">
              <Skeleton className="h-3 w-14 ml-auto" />
              <Skeleton className="h-5 w-24 ml-auto" />
            </div>
          </div>

          <Skeleton className="h-3 w-full rounded-full" />
          <div className="flex justify-between">
            <Skeleton className="h-8 w-20 rounded-lg" />
            <Skeleton className="h-8 w-20 rounded-lg" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CustomCardSkeleton;
