# SetSizes

Sets the size to the current presentation.

## Syntax

```javascript
expression.SetSizes(nWidth, nHeight);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The presentation width in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The presentation height in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets the size to the current presentation.

```javascript editor-pptx
// How to specify the sizes of the current presentation.

// Set the width and height of the ApiPesentation object.

const presentation = Api.GetPresentation();
presentation.SetSizes(254 * 36000, 190 * 36000);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("The size of this presentation was changed: width - 254 mm, height - 190 mm.");
slide.AddObject(shape);

```
