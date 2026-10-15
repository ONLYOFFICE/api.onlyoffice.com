# SizeRelFromH

The possible values for the base which the relative horizontal size of an object will be calculated from.

## Type

Enumeration

## Values

- "insideMargin"
- "leftMargin"
- "rightMargin"
- "margin"
- "outsideMargin"
- "page"

## Example

Set the width of a drawing relative to the page width.

```javascript editor-docx
// How do I make a drawing take up half of the page width?

// Set a drawing relative width to 50% of the page.

drawing.SetRelativeWidth("page", 50);
```
