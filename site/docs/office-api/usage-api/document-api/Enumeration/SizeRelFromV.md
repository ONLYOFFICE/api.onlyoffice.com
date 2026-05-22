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

This example shows how to set shape height as a percentage of the page height.

```javascript editor-docx
// Set a drawing relative height to 25% of the page.
drawing.SetRelativeHeight("page", 25);
```
