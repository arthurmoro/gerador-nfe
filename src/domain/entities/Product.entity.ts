export type ProductType = {
  id?: string;
  descricao: string;
  valor: number;
};

export class Product {
  constructor(private product: ProductType) {}
  getDescricao() {
    return this.product.descricao;
  }
  getValor() {
    return this.product.valor;
  }
}
