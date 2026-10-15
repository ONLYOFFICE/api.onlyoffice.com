# Angle

Specifies the range angle.

## Type

Enumeration

## Values

- "xlDownward"
- "xlHorizontal"
- "xlUpward"
- "xlVertical"

## Example

Specify that the range contents will be rotated upward.

```javascript editor-xlsx
// How do I rotate a range?

// Use angles to set orientation of the range.

worksheet.GetRange("A1").SetOrientation("xlUpward");
```
