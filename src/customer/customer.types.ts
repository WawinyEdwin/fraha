export type CustomerInfo = {
  phone_number: string;
  name: string;
  email: string;
  date_of_birth: Date;
  location: string;
  gender: 'male' | 'female' | 'non-binary';
  source: string;
  address: string | null;
  notes: string | null;
  promotional_message_opt_in: boolean;
};
