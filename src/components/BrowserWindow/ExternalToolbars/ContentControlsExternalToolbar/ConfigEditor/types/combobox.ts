export type combobox = {
  name: string,
  commonPr: {
    id: string;
    tag: string;
    lock: "1" | "2" | "3" | "4";
    placeHolder: string;
  };
  list: {
    display: string;
    value: string;
  }[];
  type: string;
};
