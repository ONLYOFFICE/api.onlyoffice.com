export type checkbox = {
  name: string,
  checkBoxPr: {
    checked: boolean;
    checkedSymbol: string;
    uncheckedSymbol: string;
  };
  commonPr: {
    id: string;
    tag: string;
    lock: "1" | "2" | "3" | "4";
  };
};
