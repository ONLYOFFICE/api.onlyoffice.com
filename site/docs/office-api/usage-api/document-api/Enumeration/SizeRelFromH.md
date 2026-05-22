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

This example shows how to set shape width as a percentage of the page width.

```javascript editor-docx
// Set a drawing relative width to 50% of the page.
drawing.SetRelativeWidth("page", 50);
```
