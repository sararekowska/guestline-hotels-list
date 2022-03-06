import { useContext } from "react";
import StarFull from "../images/star-full.svg";
import StarOutline from "../images/star-outline.svg";
import { UIContext } from "./UIContext";

export const FilterStarsImg = (starFilter: any) => {
  const fullstars = starFilter.starFilter;
  const { setRating } = useContext(UIContext);

  return (
    <>
      {[...Array(5)].map((value: undefined, index: number) => (
        <img
          key={index}
          src={fullstars > index ? StarFull : StarOutline}
          className="w-8 h-8"
          onClick={() => setRating?.(index + 1)}
        ></img>
      ))}
    </>
  );
};
