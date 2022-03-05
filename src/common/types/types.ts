export type Hotel = {
  name: string;
  address1: string;
  address2: string;
  starRating: string;
  images: [];
};

export type Room = {
  name: string;
  longDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
  };
};

export type Images = {
  alt?: string;
  url: string;
};
