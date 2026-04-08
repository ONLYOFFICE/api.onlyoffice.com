# GetLayoutByType

Returns the layout corresponding to the specified layout type of the slide master.

## Syntax

```javascript
expression.GetLayoutByType(sType);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [LayoutType](../../Enumeration/LayoutType.md) |  | The layout type. |

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md) \| null

## Example

This example returns the layout by its type from the slide master.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const layout = master.GetLayoutByType('title');

const fill = Api.CreateSolidFill(Api.RGB(216, 228, 188));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
if (layout) {
  paragraph.AddText('Layout found: ' + layout.GetClassType());
} else {
  paragraph.AddText('Layout not found.');
}
slide.AddObject(shape);

```
