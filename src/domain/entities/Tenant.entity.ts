import { CNPJVO } from "./CNPJ.vo";
import { CPFVO } from "./CPF.vo";

export enum RegimeTributario {
  SIMPLES_NACIONAL,
  SIMPLES_NACIONAL_EXCESSO,
  NORMAL,
}

export enum RegimeTributarioEspecial {
  SEM_REGIMENTO_TRIBUTARIO_ESPECIAL,
  MICROEMPRESA_MUNICIPAL,
  ESTIMATIVA,
  SOCIEDADE_PROFISSIONAIS,
  COOPERATIVA,
  MICROEMPRESARIO_INDIVIDUAL_MEI,
  MICROEMPRESARIO_E_EMPRESA_PEQUENO_PORTE_ME_EPP,
}

type DocumentoContratante = {
  type: "CPF" | "CNPJ";
  number: string;
};

export type TenantType = {
  id: string;
  razaoSocial: string;
  regimeTributario: RegimeTributario;
  regimeTributarioEspecial?: RegimeTributarioEspecial;
  simplesNacional: boolean;
  documento: DocumentoContratante;
  email: string;
  phone: string;
};

export class Tenant {
  constructor(private tenant: TenantType) {
    this.tenant.regimeTributario =
      this.tenant.regimeTributario ?? RegimeTributario.NORMAL;
  }
  get() {
    return this.tenant;
  }

  validate() {
    const errors: string[] = [];

    if (!this.tenant.razaoSocial) {
      errors.push("Nome é obrigatório");
    }

    if (!this.tenant.documento) {
      errors.push("Documento é obrigatório");
    }

    if (!this.tenant.email) {
      errors.push("Email é obrigatório");
    }

    if (this.isDocumentCPF()) {
      const cpf = new CPFVO(this.tenant.documento.number);
      if (!cpf.validateDocumentCPF()) {
        errors.push("CPF inválido");
      }
    }

    if (this.isCNPJDoument()) {
      const cnpj = new CNPJVO(this.tenant.documento.number);
      if (!cnpj.validateDocumentCNPJ()) {
        errors.push("CNPJ inválido");
      }
    }

    if (errors.length > 0) {
      throw new Error(errors.join(", "));
    }
  }

  isCNPJDoument() {
    return this.tenant.documento.type === "CNPJ";
  }

  isDocumentCPF() {
    return this.tenant.documento.type === "CPF";
  }
}
