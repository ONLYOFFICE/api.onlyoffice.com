# LineStyle

指定用于形成单元格边框的线条样式。

## 类型

枚举

## 值

- "None"
- "Double"
- "Hair"
- "DashDotDot"
- "DashDot"
- "Dotted"
- "Dashed"
- "Thin"
- "MediumDashDotDot"
- "SlantDashDot"
- "MediumDashDot"
- "MediumDashed"
- "Medium"
- "Thick"

## 示例

为单元格设置黑色点线底部边框。

```javascript editor-xlsx
// How to set a style of a border line.

// Get a range and change its border line style to dotted.

const color = Api.CreateColorFromRGB(0, 0, 0);
worksheet.GetRange("E2").SetBorders("Bottom", "Dotted", color);
```
