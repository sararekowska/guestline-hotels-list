import { HotelItem } from "./HotelItem";
import { useListHotels } from "./common/hooks/useListHotels";

const App = () => {
  const { data } = useListHotels();
  console.log(data);

  return (
    <main>
      {data?.map((hotel: any) => (
        <HotelItem hotel={hotel} />
      ))}
    </main>
  );
};

export default App;
