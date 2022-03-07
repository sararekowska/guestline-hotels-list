import { Filter } from "./Filter";

export const Header = () => {
  return (
    <section className="w-full h-20 bg-[#14112c] flex justify-center">
      <div className="mt-12">
        <Filter />
      </div>
    </section>
  );
};
