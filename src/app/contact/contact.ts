export class Contact {
  id?: number;
  company?: string;
  firstname: string;
  lastname: string;
  phone?: string;
  address?: {
    street: string,
    city: string,
    zip: string,
    country: string;
  };
}

