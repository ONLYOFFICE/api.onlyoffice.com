# BordersIndex

指定单元格边框位置。

## 类型

枚举

## 值

- "DiagonalDown"
- "DiagonalUp"
- "Bottom"
- "Left"
- "Right"
- "Top"
- "InsideHorizontal"
- "InsideVertical"


## 示例

This example sets a bottom black dotted border for a cell.

```javascript editor-xlsx
// How to add a border to the cell.

// Use a border index to set borders with properties.

const color = Api.CreateColorFromRGB(0, 0, 0);
worksheet.GetRange("E2").SetBorders("Bottom", "Dotted", color);

```
