import { HotelItem } from "./HotelItem";
import { useListHotels } from "../common/hooks/useListHotels";
import { Header } from "./Header";

const App = () => {
  const { data } = useListHotels();
  return (
    <>
      <Header />
      <main className="flex flex-col items-center mt-16">
        {data?.map((hotel: any) => (
          <HotelItem key={hotel.id} hotel={hotel} />
        ))}
      </main>
    </>
  );
};

export default App;
