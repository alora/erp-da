import { Dph as TDph } from "../api/dph/Dph";

export const DPH_TITLE_FIELD = "popis";

export const DphTitle = (record: TDph) => {
  return record.popis;
};
