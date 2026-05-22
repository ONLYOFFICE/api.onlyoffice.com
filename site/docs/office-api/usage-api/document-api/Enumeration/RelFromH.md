# RelFromH

The possible values for the base which the relative horizontal positioning of an object will be calculated from.

## Type

Enumeration

## Values

- "character"
- "column"
- "insideMargin"
- "leftMargin"
- "rightMargin"
- "margin"
- "outsideMargin"
- "page"

## Example

Set horizontal alignment for a drawing object.

```javascript editor-docx
// How to align a drawing to the center.

// Set a drawing horizontal aligment.

drawing.SetHorAlign("page", "center");
```
