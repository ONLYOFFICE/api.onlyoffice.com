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

创建具有颜色和宽度设置的虚线描边。

```javascript editor-docx
// Create a custom stroke line with a dash pattern.

// Create a red dash-dot stroke with 4pt width.

Api.CreateStroke(4 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(192, 0, 0)), "dashDot");
```
