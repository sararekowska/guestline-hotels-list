import { HotelItem } from "./HotelItem";
import { useListHotels } from "./useListHotels";

const App = () => {
  return <Example />;
};

function Example() {
  const { data } = useListHotels();
  console.log(data);

  return (
    <section className="pl-4">
      <ul>
        {data?.map((hotel: any) => (
          <HotelItem hotel={hotel} />
        ))}
      </ul>
    </section>
  );
}

export default App;
