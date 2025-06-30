export type ComboboxControl = {
  commonPr: {
    id: number;
    tag: string;
    lock: 1 | 2 | 3 | 4;
    placeHolderText: string;
  };
  list: {
    display: string;
    value: string;
  }[];
  type: number;
};
