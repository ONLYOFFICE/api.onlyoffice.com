# Select

Selects the current graphic object.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example selects the current graphic object.

```javascript editor-pptx
// How to select a drawing object of the slide.

// Select an object from a slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const allDrawings = slide.GetAllDrawings();
if (allDrawings.length > 0) {
	const drawing = allDrawings[0];
	drawing.Select();
}

```
