export interface IEndereco {
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export interface ICliente {
  id?: string;
  nome: string;
  email: string;
  cpf: string;
  endereco?: IEndereco;
}

export class Client implements ICliente {
  id?: string;
  nome: string;
  email: string;
  cpf: string;
  endereco?: IEndereco;
  constructor(cliente: ICliente) {
    Object.assign(this, cliente);
  }
  setEndereco(endereco: IEndereco) {
    this.endereco = endereco;
  }
  validate() {
    return true;
  }
}
