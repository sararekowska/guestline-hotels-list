import StarFull from "../images/star-full.svg";
import StarOutline from "../images/star-outline.svg";

export const HotelStarsImg = ({ starRating }: { starRating: string }) => {
  const fullStars = parseInt(starRating);
  const outlinedStars = 5 - fullStars;

  return (
    <>
      {[...Array(fullStars)].map((value: undefined, index: number) => (
        <img key={index} src={StarFull} className="w-8 h-8" alt="full star" />
      ))}

      {[...Array(outlinedStars)].map((value: undefined, index: number) => (
        <img
          key={index}
          src={StarOutline}
          className="w-8 h-8"
          alt="outlined star"
        />
      ))}
    </>
  );
};
