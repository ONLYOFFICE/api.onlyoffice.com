export type TextControl = {
  commonPr: {
    id: number;
    tag: string;
    lock: 1 | 2 | 3 | 4;
    appearance: 1 | 2;
    color: {
      r: number;
      g: number;
      b: number;
    };
    placeHolderText: string;
  };
  type: number;
};
