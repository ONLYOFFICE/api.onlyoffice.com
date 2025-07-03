# GetModified

Returns the date when the document was last modified.

## Syntax

```javascript
expression.GetModified();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Date

## Example

This example demonstrates how to set and get the date when the current presentation was modified last time.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetModified(new Date("10 March 1990"));

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const lastModifiedDate = core.GetModified().toDateString();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
