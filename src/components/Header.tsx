import { useContext } from "react";
import { Filter } from "./Filter";
import { StarsImg } from "./StarsImg";
import { UIContext } from "./UIContext";

export const Header = () => {
  const store = useContext(UIContext);
  const starRating = "3";

  return (
    <section className="w-full h-20 bg-[#634d44]">
      <div className="bg-[#000000] w-8 h-8">
        <StarsImg starRating={starRating} />
        <Filter />
      </div>
    </section>
  );
};
