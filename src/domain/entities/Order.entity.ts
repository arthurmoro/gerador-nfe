import { Address } from "./Address.vo";
import { Client } from "./Client.entity";
import { Product } from "./Product.entity";
import { Tenant } from "./Tenant.entity";

export type OrderType = {
  id: string;
  tenant: Tenant;
  client: Client;
  products: Product[];
  address: Address;
};

export class Order {
  constructor(private order: OrderType) {}
}
