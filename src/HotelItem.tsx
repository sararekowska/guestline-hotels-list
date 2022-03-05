import { Hotel, Room, Images } from "./common/types/types";
import { useGetHotel } from "./common/hooks/useGetHotel";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: false,
};

export const HotelItem = ({ hotel }: { hotel: Hotel }) => {
  const { data } = useGetHotel(hotel.name);
  console.log(data);
  return (
    <section className="m-5 border-black border-2">
      <div className="border-b-2 border-black">
        <Slide {...properties} className="w-[20rem]">
          {hotel?.images.map((image: Images) => (
            // <img src={image.url} alt={image.alt}></img>
            <div className="each-slide">
              <div
                className="h-[20rem] w-[20rem] bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: `url(${image.url})` }}
              ></div>
            </div>
          ))}
        </Slide>
        {hotel.name}
        <br />
        {hotel.address1}
        <br />
        {hotel.address2}
        <br />
        {hotel.starRating}
      </div>
      <div className="border-b-2 border-black">
        {data?.rooms.map((room: Room) => (
          <div>
            {room.name}
            <br />
            {room.occupancy.maxAdults}
            <br />
            {room.occupancy.maxChildren}
            <br />
            {room.longDescription}
          </div>
        ))}
      </div>
    </section>
  );
};
