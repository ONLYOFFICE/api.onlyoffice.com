# DashType

可用的线条虚线类型。

## 类型

枚举

## 值

- "dash"
- "dashDot"
- "dot"
- "lgDash"
- "lgDashDot"
- "lgDashDotDot"
- "solid"
- "sysDash"
- "sysDashDot"
- "sysDashDotDot"
- "sysDot"


## 示例

This example creates a dashed stroke with color and width settings.

```javascript editor-xlsx
// How to create a custom stroke line with dash pattern.

// Create a red dash-dot stroke with 4pt width.
Api.CreateStroke(4 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(192, 0, 0)), "dashDot");
```
