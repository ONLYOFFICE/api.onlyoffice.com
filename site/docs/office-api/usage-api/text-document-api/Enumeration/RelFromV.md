# RelFromV

The possible values for the base which the relative vertical positioning of an object will be calculated from.

## Type

Enumeration

## Values

- "bottomMargin"
- "topMargin"
- "margin"
- "page"
- "line"
- "paragraph"


## Example

This example set vertical aligment for a drawing object.

```javascript editor-docx
// How to align a drawing to the center.

// Set a drawing vertical aligment.

drawing.SetVerAlign("page", "center");
```
