interface INode {
  id: string;
  x: number;
  y: number;
  name: string;
  type: "Div" | "Input" | "Img" | "Button" | "P";
  width: number | string;
  height: number;
  display?: string;
  value?: string;
  backgroundColor?: string;
  color?: string;
  border?: string;
  children: INode[];
}
