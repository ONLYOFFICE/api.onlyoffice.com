# DrawingCellAnchor

绘图对象的单元格锚点。

## 类型

Object

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| colOffset | [EMU](../Enumeration/EMU.md) | 从 fromCol 列到绘图对象左侧部分的偏移量。 |
| fromCol | number | 绘图对象起始所在列的编号。 |
| fromRow | number | 绘图对象起始所在行的编号。 |
| rowOffset | [EMU](../Enumeration/EMU.md) | 从 fromRow 行到绘图对象上部的偏移量。 |

## 示例

将形状锚定到单元格并读回锚点。

```javascript editor-xlsx
// How to use the cell anchor of a drawing in a spreadsheet.

// Place a shape with a cell anchor and read it back in the same form.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill, stroke, 0, 0, 0, 0);
let anchor = {fromCol: 2, colOffset: 5 * 36000, fromRow: 3, rowOffset: 2 * 36000};
drawing.SetPosition(anchor.fromCol, anchor.colOffset, anchor.fromRow, anchor.rowOffset);
let position = drawing.GetPosition();
worksheet.GetRange("A1").SetValue("Anchored at column " + position.fromCol + ", row " + position.fromRow);
```
