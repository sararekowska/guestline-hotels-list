import { useContext } from "react";
import { FilterStarsImg } from "./FilterStarsImg";
import { UIContext } from "./UIContext";

export const Filter = () => {
  const { maxAdult, maxChild, setMaxChild, setMaxAdult, rating, setRating } =
    useContext(UIContext);

  return (
    <>
      <section className="flex flex-row justify-evenly items-center bg-white w-[35rem] p-4 border-2 border-black">
        <div className="flex flex-row">
          <FilterStarsImg starFilter={rating} />
        </div>
        <div className="flex flex-row ml-4 text-lg">
          <div className="mr-4 mt-1">
            Adults:
            <button
              className="mx-1"
              onClick={() => setMaxAdult?.((x) => x + 1)}
            >
              +
            </button>
            {maxAdult}
            <button
              className="mx-1"
              onClick={() => setMaxAdult?.((x) => (x > 0 ? x - 1 : x))}
            >
              -
            </button>
          </div>
          <div className="mt-1">
            Children:
            <button
              className="mx-1"
              onClick={() => setMaxChild?.((x) => x + 1)}
            >
              +
            </button>
            {maxChild}
            <button
              className="mx-1"
              onClick={() => setMaxChild?.((x) => (x > 0 ? x - 1 : x))}
            >
              -
            </button>
          </div>
          <div className="mt-1">
            <button
              className="ml-4 text-sm"
              onClick={() => {
                setMaxAdult?.(0);
                setMaxChild?.(0);
                setRating?.(0);
              }}
            >
              CLEAR
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
