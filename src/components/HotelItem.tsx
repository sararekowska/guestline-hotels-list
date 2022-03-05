import { Hotel, Images } from "../common/types/types";
import { useGetHotel } from "../common/hooks/useGetHotel";
import { Slide } from "react-slideshow-image";
import { RoomItem } from "./RoomItem";
import { StarsImg } from "./StarsImg";
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
  return (
    <section className="m-8 border-[#634d44] border-2 bg-[#c3a6a0] rounded-md w-8/12">
      <div className="flex flex-row p-9">
        <Slide {...properties} className="w-[15rem]">
          {hotel?.images.map((image: Images) => (
            <div key={hotel.id + "_img"} className="each-slide">
              <div
                className="h-[15rem] w-[15rem] bg-no-repeat bg-center bg-cover border-[#634d44] border-2 rounded"
                style={{ backgroundImage: `url(${image.url})` }}
              ></div>
            </div>
          ))}
        </Slide>
        <div className="w-[70%] pl-8">
          <h1 className="font-bold text-3xl">{hotel.name}</h1>
          <p className="text-xl pt-4">{hotel.address1}</p>
          <p className="text-xl">{hotel.address2}</p>
        </div>
        <StarsImg starRating={hotel.starRating} />
      </div>
      <RoomItem data={data} />
    </section>
  );
};
