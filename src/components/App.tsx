import { useListHotels } from "../common/hooks/useListHotels";
import { Header } from "./Header/Header";
import { UIContextProvider } from "../common/context/UIContext";

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
