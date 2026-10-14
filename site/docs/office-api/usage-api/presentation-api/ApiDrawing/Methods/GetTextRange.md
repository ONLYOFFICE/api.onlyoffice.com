# GetTextRange

Returns an ApiTextRange covering the full text content of the shape. Creates a text body if the shape does not yet have one.

## Syntax

```javascript
expression.GetTextRange();
```

`expression` - A variable that represents an [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Get the full text range of a shape and use it to set formatted text.

```javascript editor-pptx
// Creates a text body if the shape does not have one yet; returns null for drawings that are not shapes.

// Create a shape, get its text range, then set the text and make it bold.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
const range = shape.GetTextRange();
range.SetText("Hello World");
range.SetBold(true);
```
