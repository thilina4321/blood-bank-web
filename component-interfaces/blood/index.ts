export interface BloodDonateNote {
  _id: number;
  title: string;
}

export interface BloodEligibilityBloodTypeProps {
  title: string;
  description: string;
  summeryData: { type: string; amount: number }[];
  status: boolean;
}

export interface BloodEligibilityTitleInterface {
  title: string;
  description: string;
}

export interface BloodEligibilityKnowMoreInterface {
  id: string;
  image: string;
  title: string;
  des: string;
}


export interface BloodDonateBloodTitleInterface {
  title: string;
  description: string;
}
