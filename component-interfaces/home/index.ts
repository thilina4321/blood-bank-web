export interface HomeBloodDetailsProps {
  bloodDetails: { title: string; shortDescription: string }[];
}

export interface HomeLocationProps {
  locations: { district: string; province: string; city: string }[];
}

export interface HomeInformationInterface {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface HomeFaqInterface {
  id: string;
  question: string;
  answer: string;
}

