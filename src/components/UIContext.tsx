import React, { createContext, useState } from "react";

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

type StoreValue = Partial<{
  setRating: Setter<number>;
  setMaxAdult: Setter<number>;
  setMaxChild: Setter<number>;
  rating: number;
  maxAdult: number;
  maxChild: number;
}>;

export const UIContext = createContext<StoreValue>({});

export const UIContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [rating, setRating] = useState(0);
  const [maxAdult, setMaxAdult] = useState(0);
  const [maxChild, setMaxChild] = useState(0);

  const store: StoreValue = {
    rating,
    setRating,
    maxAdult,
    setMaxAdult,
    maxChild,
    setMaxChild,
  };

  return <UIContext.Provider value={store}>{children}</UIContext.Provider>;
};
