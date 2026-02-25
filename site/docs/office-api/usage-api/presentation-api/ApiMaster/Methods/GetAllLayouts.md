# GetAllLayouts

Returns all layouts from the slide master.

## Syntax

```javascript
expression.GetAllLayouts();
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md)[]

## Example

This example shows how to get all layouts of the specified slide master.

```javascript editor-pptx playground
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

slide.RemoveAllObjects();
master.RemoveLayout(0, master.GetAllLayouts().length);

const layoutsCount = 3;
for (let i = 0; i < layoutsCount; i++) {
	const layout = Api.CreateLayout();
	master.AddLayout(0, layout);
}

const labelFill = Api.CreateSolidFill(Api.CreateRGBColor(210, 230, 250));
const labelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const label = Api.CreateShape('rect', 60 * 36000, 20 * 36000, labelFill, labelStroke);
label.SetPosition(0, 3 * 36000);
slide.AddObject(label);

const layouts = master.GetAllLayouts();
const docContent = label.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Number of master slide layouts: ' + layouts.length);

```
