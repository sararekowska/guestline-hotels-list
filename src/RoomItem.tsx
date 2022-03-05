import { Room } from "./common/types/types";
import { Data } from "./common/types/types";

export const RoomItem = ({ data }: { data: Data }) => {
  return (
    <div>
      {data?.rooms.map((room: Room) => (
        <div
          key={room.id}
          className="border-t-2 border-[#634d44] p-8 flex flex-row"
        >
          <div className="w-[20%] mr-8">
            <h1 className="font-bold text-xl">{room.name}</h1>
            <p className="pt-2">Adults: {room.occupancy.maxAdults}</p>
            <p>Children: {room.occupancy.maxChildren}</p>
          </div>
          <p className="w-[75%]">{room.longDescription}</p>
        </div>
      ))}
    </div>
  );
};
