import { useQuery } from "react-query";

export const useGetHotel = (name: string) => {
  const query = useQuery(["hotel", name], async () => {
    const res = await fetch("https://obmng.dbm.guestline.net/api/roomRates/OBMNG/" + name);
    return res.json();
  });
  return query;
};
