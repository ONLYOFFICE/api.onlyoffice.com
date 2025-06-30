export type CheckboxControl = {
  checkBoxPr: {
    checked: boolean;
    checkedSymbol: number;
    uncheckedSymbol: number;
  };
  commonPr: {
    id: number;
    tag: string;
    lock: 1 | 2 | 3 | 4;
  };
};
