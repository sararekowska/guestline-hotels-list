import { Hotel } from "./types";
import { useGetHotel } from "./useGetHotel";

export const HotelItem = ({ hotel }: { hotel: Hotel }) => {
  const { data } = useGetHotel(hotel.name);
  return (
    <section className="m-5">
      <ul>
        Hotel details
        <li>{hotel.name}</li>
        <li>{hotel.address1}</li>
        <li>{hotel.starRating}</li>
      </ul>
    </section>
  );
};
