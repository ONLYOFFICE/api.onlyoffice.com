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

Center a drawing vertically relative to the page.

```javascript editor-docx
// How do I center a drawing vertically relative to the page?

// Set a drawing vertical aligment.

drawing.SetVerAlign("page", "center");
```
