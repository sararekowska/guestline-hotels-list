import { Hotel } from "./types";
import { useGetHotel } from "./useGetHotel";

export const HotelItem = ({ hotel }: { hotel: Hotel }) => {
  const { data } = useGetHotel(hotel.name);
  //   console.log(data);
  return (
    <section className="m-5">
      <ul className="m-5 text-red-700">
        Hotel details:
        <li>{hotel.name}</li>
        <li>{hotel.address1}</li>
        <li>{hotel.starRating}</li>
      </ul>
      {hotel?.images.map((image: any) => (
        <img src={image.url} alt={image.alt}></img>
      ))}
      Rooms details:
      {data?.rooms.map((room: any) => (
        <ul className="m-5 text-teal-600">
          <li>name: {room.name}</li>
          <li>bed config: {room.bedConfiguration}</li>
          <li>description: {room.longDescription}</li>
          <li>max adults: {room.occupancy.maxAdults}</li>
          <li>max children: {room.occupancy.maxChildren}</li>
        </ul>
      ))}
    </section>
  );
};
