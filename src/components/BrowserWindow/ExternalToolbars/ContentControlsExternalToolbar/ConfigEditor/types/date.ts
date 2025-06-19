export type date = {
  name: string,
  commonPr: {
    id: string;
    tag: string;
    lock: "1" | "2" | "3" | "4";
  };
  datePickerPr: {
    format: string;
    date: string;
  };
};
