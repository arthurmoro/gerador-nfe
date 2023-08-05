import { Client } from "./Client.entity";
import { Product } from "./Product.entity";
import { Tenant } from "./Tenant.entity";

export type NFEType = {
  id: string;
  valor: number;
  data: Date;
  status: string;
  cliente: Client;
  tenant: Tenant;
  products: Product[];
};

export class NFE {
  nfe: NFEType;
  constructor(nfe: Omit<NFEType, "products">) {
    Object.assign(this, nfe);
    if (!this.nfe.products) {
      this.nfe.products = [];
    }
    this.validate();
    this.calculateTotalAmount();
  }

  private calculateTotalAmount() {
    const total = this.nfe.products?.reduce(
      (acc, produto) => acc + produto.getValor(),
      0
    );
    this.nfe.valor = total ?? 0;
  }

  getTenant() {
    return this.nfe.tenant;
  }

  getClient() {
    return this.nfe.cliente;
  }

  addProduct(product: Product) {
    this.nfe.products.push(product);
  }

  setProducts(products: Product[]) {
    this.nfe.products = products;
  }

  getProducts(): Product[] {
    return this.nfe.products;
  }

  getTotalAmount() {
    this.calculateTotalAmount();
    return this.nfe.valor;
  }

  validate() {
    return true;
  }
}
