import { NFEAdapter } from "../../domain/adapters/NFE.adapter";
import { NFE } from "../../domain/entities/NFE.entity";

enum NfeTipoImpressao {
  SEM_DANFE = "0",
  DANFE_RETRATO = "1",
  DANFE_PAISAGEM = "2",
  DANFE_SIMPLIFICADO = "3",
}

enum NfeTipoEmissao {
  NORMAL = "1",
  CONTINGENCIA_FS = "2",
  CONTINGENCIA_SCAN = "3",
  CONTINGENCIA_DPEC = "4",
  CONTINGENCIA_FSDA = "5",
  CONTINGENCIA_SVCAN = "6",
  CONTINGENCIA_SVCRS = "7",
}

enum NfeCodigoIdentificacaoDestino {
  OPERACAO_INTERNA = "1",
  OPERACAO_INTERESTADUAL = "2",
  OPERACAO_EXTERIOR = "3",
}

enum RegimeTributario {
  SIMPLES_NACIONAL = "1",
  SIMPLES_NACIONAL_EXCESSO_RECEITA = "2",
  REGIME_NORMAL = "3",
}

enum NfeRegimeTributarioEspecial {
  SEM_REGIMENTO_TRIBUTARIO_ESPECIAL = "0",
  MICROEMPRESA_MUNICIPAL = "1",
  ESTIMATIVA = "2",
  SOCIEDADE_PROFISSIONAIS = "3",
  COOPERATIVA = "4",
  MICROEMPRESARIO_INDIVIDUAL_MEI = "5",
  MICROEMPRESARIO_E_EMPRESA_PEQUENO_PORTE_ME_EPP = "6",
}

enum NfeFinalidade {
  NORMAL = "1",
  COMPLEMENTAR = "2",
  AJUSTE = "3",
  DEVOLUCAO = "4",
}

type PlugnotasItem = {
  codigo: string;
  descricao: string;
  ncm: string;
  cest: string;
  cfop: string;
  valorUnitario: {
    comercial: number;
    tributavel: number;
  };
  valor: number;
  tributos: {
    icms: {
      origem: string;
      cst: string;
      baseCalculo: {
        modalidadeDeterminacao: number;
        valor: number;
      };
      aliquota: number;
      valor: number;
    };
    pis: {
      cst: string;
      baseCalculo: {
        valor: number;
        quantidade: number;
      };
      aliquota: number;
      valor: number;
    };
    cofins: {
      cst: string;
      baseCalculo: {
        valor: number;
      };
      aliquota: number;
      valor: number;
    };
  };
};

type PlugnotasPagamento = {
  aVista: boolean;
  meio: string;
  valor: number;
};

type PlugnotasResponsavelTecnico = {
  cpfCnpj: string;
  nome: string;
  email: string;
  telefone: {
    ddd: string;
    numero: string;
  };
};

type PlugnotasNfeDTO = {
  idIntegracao: string;
  presencial: boolean;
  consumidorFinal: boolean;
  natureza: string;
  emitente: {
    cpfCnpj: string;
  };
  destinatario: {
    cpfCnpj: string;
    razaoSocial: string;
    email: string;
    endereco: {
      tipoLogradouro: string;
      logradouro: string;
      numero: string;
      bairro: string;
      codigoCidade: string;
      descricaoCidade: string;
      estado: string;
      cep: string;
    };
  };
  itens: PlugnotasItem[];
  pagamentos: PlugnotasPagamento[];
  responsavelTecnico: PlugnotasResponsavelTecnico;
};

export class PlugnotasNfeAdapter implements NFEAdapter {
  constructor() {}

  validar(nfe: NFE): void {
    throw new Error("Method not implemented.");
  }
  cancelar(nfe: NFE): void {
    throw new Error("Method not implemented.");
  }

  async emitir(nfe: NFE): Promise<void> {
    console.log("Emitindo NF-e no Plugnotas");

    console.log("NF-e emitida com sucesso!");
  }

  private generateNfeDTO(nfe: NFE): PlugnotasNfeDTO {
    throw new Error("Method not implemented.");
  }
}
