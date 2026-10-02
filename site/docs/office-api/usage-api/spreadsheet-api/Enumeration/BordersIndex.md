# BordersIndex

Specifies the cell border position.

## Type

Enumeration

## Values

- "DiagonalDown"
- "DiagonalUp"
- "Bottom"
- "Left"
- "Right"
- "Top"
- "InsideHorizontal"
- "InsideVertical"

## Example

Set a bottom black dotted border for a cell.

```javascript editor-xlsx
// How do I add a border to a cell?

// Use a border index to set borders with properties.

const color = Api.CreateColorFromRGB(0, 0, 0);
worksheet.GetRange("E2").SetBorders("Bottom", "Dotted", color);
```
