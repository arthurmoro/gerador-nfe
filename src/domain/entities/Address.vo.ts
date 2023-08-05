export type AddressProps = {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
};

export class Address {
  constructor(private address: AddressProps) {}
  getFormattedAddress() {
    return `${this.address.street}, ${this.address.number} - ${this.address.neighborhood}, ${this.address.city} - ${this.address.state} - ${this.address.zipCode}`;
  }
}
