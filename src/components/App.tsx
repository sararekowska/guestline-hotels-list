import { useListHotels } from "../common/hooks/useListHotels";
import { Header } from "./Header";
import { UIContextProvider } from "./UIContext";

import { HotelFetch } from "./HotelFetch";

const App = () => {
  const { data } = useListHotels();

  return (
    <UIContextProvider>
      <Header />
      <HotelFetch data={data} />
    </UIContextProvider>
  );
};

export default App;
