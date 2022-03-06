import { useContext } from "react";
import { UIContext } from "./UIContext";

export const Filter = () => {
  const store = useContext(UIContext);

  return (
    <>
      <button onClick={() => store?.setMaxAdult((x) => x + 1)}>+</button>
      {store?.maxAdult}
      <button onClick={() => store?.setMaxAdult((x) => (x > 0 ? x - 1 : x))}>
        -
      </button>
    </>
  );
};
