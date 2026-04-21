# DashType

Available dash type for line.

## Type

Enumeration

## Values

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

## Example

Create a dashed stroke with color and width settings.

```javascript editor-pptx
// Create a custom stroke line with a dash pattern.

// Create a red dash-dot stroke with 4pt width.

Api.CreateStroke(4 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(192, 0, 0)), "dashDot");
```
