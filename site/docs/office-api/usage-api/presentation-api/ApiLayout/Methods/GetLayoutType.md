# GetLayoutType

Returns the type of the current layout.

## Syntax

```javascript
expression.GetLayoutType();
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[LayoutType](../../Enumeration/LayoutType.md)

## Example

Return a type of the layout in a presentation.

```javascript editor-pptx
// How to get the layout type for a layout in a presentation?

// Get the layout type and display the result in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layouts = master.GetAllLayouts();

const fill = Api.CreateSolidFill(Api.HexColor('#33bbaa'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Found layouts with types:\n');
paragraph.AddText(
	layouts
		.map(layout => layout.GetLayoutType())
		.join(', ')
);
```
