export type text = {
  name: string;
  commonPr: {
    id: string;
    tag: string;
    lock: "1" | "2" | "3" | "4";
    appearence: boolean;
    color: {
      r: number;
      g: number;
      b: number;
    };
    placeHolder: string;
  };
  type: string;
};
