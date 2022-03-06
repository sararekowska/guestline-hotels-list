import { useContext } from "react";
import { Hotel } from "../common/types/types";
import { HotelItem } from "./HotelItem";
import { UIContext } from "./UIContext";

export const HotelFetch = ({ data }: { data: any }) => {
  const { rating } = useContext(UIContext);

  return (
    <main className="flex flex-col items-center mt-8">
      {data
        ?.filter((hotel: Hotel) =>
          rating === 0 ? true : parseInt(hotel.starRating) === rating
        )
        .map((hotel: Hotel) => (
          <HotelItem key={hotel.id} hotel={hotel} />
        ))}
    </main>
  );
};
