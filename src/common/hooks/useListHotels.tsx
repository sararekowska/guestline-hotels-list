import { useQuery } from "react-query";

export const useListHotels = () => {
  const query = useQuery("listHotels", async () => {
    const res = await fetch("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG");
    return res.json();
  });
  return query;
};
