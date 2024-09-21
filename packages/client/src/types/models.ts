export interface Hotel {
  chain_name: string;
  hotel_name: string;
  addressline1: string;
  addressline2?: string;
  zipcode: string;
  city: string;
  state: string;
  country: string;
  countryisocode: string;
  star_rating: number;
}

export type Country = {
  _id: string;
  country: string;
  countryisocode: string;
};

export type City = {
  _id: string;
  name: string;
};
