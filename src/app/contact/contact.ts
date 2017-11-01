export class Contact {
  id: number;
  firstname: string;
  lastname: string;
  phone: string;
  address: {
    street: string,
    city: string,
    zip: string,
    country: string;
  };
}

