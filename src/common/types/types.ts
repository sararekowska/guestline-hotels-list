import { StringLiteralLike } from "typescript";

export type Hotel = {
  id: string;
  name: string;
  address1: string;
  address2: string;
  starRating: string;
  images: [];
};

export type Room = {
  id: string;
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

export type Data = {
  rooms: [];
  ratePlans: [];
};
