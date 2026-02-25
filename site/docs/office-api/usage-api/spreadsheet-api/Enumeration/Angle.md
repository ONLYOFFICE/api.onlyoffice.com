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

This example specifies that the range contents will be rotated upward.

```javascript editor-xlsx playground
// Use angles to set orientation of the range. 

// How to rotate a range.

worksheet.GetRange("A1").SetOrientation("xlUpward");
```
