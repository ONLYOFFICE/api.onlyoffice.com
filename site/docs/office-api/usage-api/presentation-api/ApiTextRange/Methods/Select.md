# Select

Selects the text range in the editor.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Select the text covered by a range in the presentation editor.

```javascript editor-pptx
// Useful for highlighting a range for the user to see in the editor view.

// Select the text range in the presentation editor view.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be selected programmatically.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.Select();
```
