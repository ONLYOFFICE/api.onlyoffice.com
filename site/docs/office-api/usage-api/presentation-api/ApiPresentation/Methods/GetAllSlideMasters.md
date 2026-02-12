# GetAllSlideMasters

Returns an array of all slide masters from the current presentation.

## Syntax

```javascript
expression.GetAllSlideMasters();
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiMaster](../../ApiMaster/ApiMaster.md)[]

## Example

This example shows how to get all slide masters from current presentation.

```javascript editor-pptx playground
const presentation = Api.GetPresentation();
const firstSlide = presentation.GetSlideByIndex(0);
firstSlide.RemoveAllObjects();

const count = 3;
for (let i = 0; i < count; i++) {
	const master = Api.CreateMaster();
	Api.CreateLayout(master);
	presentation.AddMaster(i + 1, master);
}

const mastersCount = presentation.GetMastersCount();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(50, 100, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
firstSlide.AddObject(shape);

const paragraph =  shape.GetContent().GetElement(0);
paragraph.AddText('Total slide masters count: ' + mastersCount);

```
