import { HotelItem } from "./HotelItem";
import { useListHotels } from "../common/hooks/useListHotels";
import { Header } from "./Header";
import { UIContextProvider } from "./UIContext";

const App = () => {
  const { data } = useListHotels();
  return (
    <UIContextProvider>
      <Header />
      <main className="flex flex-col items-center mt-8">
        {data?.map((hotel: any) => (
          <HotelItem key={hotel.id} hotel={hotel} />
        ))}
      </main>
    </UIContextProvider>
  );
};

export default App;
