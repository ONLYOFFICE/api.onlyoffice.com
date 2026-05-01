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

为单元格设置黑色点线底部边框。

```javascript editor-xlsx
// How to add a border to the cell.

// Use a border index to set borders with properties.

const color = Api.CreateColorFromRGB(0, 0, 0);
worksheet.GetRange("E2").SetBorders("Bottom", "Dotted", color);
```
