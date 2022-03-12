export interface AboutMainLocationProps {
  isTitle?: boolean;
}

export interface AboutMainLocation {
  id: number;
  number: string;
  long: number;
  lat: number;
  name: string;
  address: string;
  location: string;
}

export interface AboutResearchCard {
  width: number;
  title: string;
  image: string;
  description: string;
}
