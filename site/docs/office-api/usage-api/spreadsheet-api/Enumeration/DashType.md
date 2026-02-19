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

This example creates a dashed stroke with color and width settings.

```javascript editor-xlsx
// How to create a custom stroke line with dash pattern.

// Create a red dash-dot stroke with 4pt width.
Api.CreateStroke(4 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(192, 0, 0)), "dashDot");
```
