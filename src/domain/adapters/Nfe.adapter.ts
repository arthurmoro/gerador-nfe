import { NFE } from "../entities/NFE.entity";

export interface NFEAdapter {
  emitir(nfe: NFE): void;
  validar(nfe: NFE): void;
  cancelar(nfe: NFE): void;
}
