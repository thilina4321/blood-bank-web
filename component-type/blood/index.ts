export interface BloodDonateNote {
  id: number;
  note: string;
}

export interface BloodEligibilityBloodTypeProps {
  title: string;
  description: string;
  summeryData: { type: string; amount: number }[];
  status: boolean;
}
