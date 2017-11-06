export class Contact {
  id: number;
  company: string;
  firstname: string;
  lastname: string;
  phone?: string;
    street: string;
    city: string;
    zip: string;
    country: string;

  constructor (id?: number, company?: string, firstname?: string, lastname?: string, phone?: string, street?: string, city?: string, zip?: string, country?: string){
      this.id = id;
      this.company = company;
      this.firstname = firstname;
      this.lastname = lastname;
      this.phone = this.phone;
      this.street = street;
      this.city = city;
      this.zip = zip;
      this.country = country;
    }
}

