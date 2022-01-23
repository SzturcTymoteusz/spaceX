export interface Launch {
  id: string;
  flight_number: number;
  name: string;
  success: boolean | null;
  date_local: string;
  links: {
    patch: {
      small: string | null;
      large: string | null;
    };
  };
  details: string | null;
}
