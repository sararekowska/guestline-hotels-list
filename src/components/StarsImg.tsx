import StarFull from "./star-full.svg";
import StarOutline from "./star-outline.svg";

export const StarsImg = ({ starRating }: { starRating: string }) => {
  const fullStars = parseInt(starRating);
  const outlinedStars = 5 - fullStars;

  return (
    <>
      {[...Array(fullStars)].map((value: undefined, index: number) => (
        <img key={index} src={StarFull} className="w-8 h-8"></img>
      ))}
      {[...Array(outlinedStars)].map((value: undefined, index: number) => (
        <img key={index} src={StarOutline} className="w-8 h-8"></img>
      ))}
    </>
  );
};
