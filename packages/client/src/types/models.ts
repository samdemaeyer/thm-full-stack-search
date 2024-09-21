// Using `interface` instead of `type` for these object models.
// This decision was made because interfaces are more flexible and allow for future extension,
// as they support declaration merging, even though this is currently a one-time assessment.
// The application is written with a mindset that it could grow

export interface Hotel {
  _id: string;
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

export interface Country {
  _id: string;
  country: string;
  countryisocode: string;
}

export interface City {
  _id: string;
  name: string;
}
