import { HotelItem } from "./HotelItem";
import { useListHotels } from "../common/hooks/useListHotels";

const App = () => {
  const { data } = useListHotels();
  return (
    <main className="flex flex-col items-center">
      {data?.map((hotel: any) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </main>
  );
};

export default App;
