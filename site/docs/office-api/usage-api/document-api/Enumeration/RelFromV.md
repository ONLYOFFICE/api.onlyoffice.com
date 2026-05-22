# RelFromV

The possible values for the base which the relative vertical positioning of an object will be calculated from.

## Type

Enumeration

## Values

- "bottomMargin"
- "insideMargin"
- "topMargin"
- "margin"
- "outsideMargin"
- "page"
- "line"
- "paragraph"

## Example

Set vertical alignment for a drawing object.

```javascript editor-docx
// How to align a drawing to the center.

// Set a drawing vertical aligment.

drawing.SetVerAlign("page", "center");
```
