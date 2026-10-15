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

Center a drawing horizontally relative to the page.

```javascript editor-docx
// How do I center a drawing horizontally relative to the page?

// Set a drawing horizontal aligment.

drawing.SetHorAlign("page", "center");
```
