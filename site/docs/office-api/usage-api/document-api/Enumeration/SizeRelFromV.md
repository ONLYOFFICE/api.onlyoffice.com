# SizeRelFromV

The possible values for the base which the relative vertical size of an object will be calculated from.

## Type

Enumeration

## Values

- "bottomMargin"
- "insideMargin"
- "topMargin"
- "margin"
- "outsideMargin"
- "page"

## Example

Set the height of a drawing relative to the page height.

```javascript editor-docx
// How do I make a drawing take up a quarter of the page height?

// Set a drawing relative height to 25% of the page.

drawing.SetRelativeHeight("page", 25);
```
