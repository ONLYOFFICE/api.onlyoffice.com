export type DateControl = {
  commonPr: {
    id: number;
    tag: string;
    lock: 1 | 2 | 3 | 4;
  };
  datePickerPr: {
    format: string;
    date: string;
  };
};
