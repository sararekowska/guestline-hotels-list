import { useContext } from "react";
import { Room } from "../common/types/types";
import { Data } from "../common/types/types";
import { UIContext } from "../common/context/UIContext";

export const RoomItem = (props: { data: Data }) => {
  const { maxAdult, maxChild } = useContext(UIContext);
  return (
    <div>
      {props.data?.rooms
        .filter((room: Room) =>
          (maxAdult === 0 && maxChild === 0) || !maxAdult || !maxChild
            ? true
            : room.occupancy.maxAdults >= maxAdult &&
              room.occupancy.maxChildren >= maxChild
        )
        .map((room: Room) => (
          <div
            key={room.id}
            className="border-t-2 border-black p-8 flex flex-row"
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
