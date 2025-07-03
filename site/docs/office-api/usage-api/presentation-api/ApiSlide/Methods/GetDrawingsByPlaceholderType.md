# GetDrawingsByPlaceholderType

Returns an array of drawings by the specified placeholder type.

## Syntax

```javascript
expression.GetDrawingsByPlaceholderType(sType);
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [PlaceholderType](../../Enumeration/PlaceholderType.md) |  | The placeholder type. |

## Returns

[Drawing](../../Enumeration/Drawing.md)[]

## Example

This example gets drawings by placeholder type and removes it from slide.

```javascript editor-pptx
// How to get all drawings knowing its placeholder as an array.

// Retrieve drawings with the specified placeholder and delete them.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const placeholder = Api.CreatePlaceholder("chart");
shape.SetPlaceholder(placeholder);
slide.AddObject(shape);
const drawingsWithPh = slide.GetDrawingsByPlaceholderType("chart");
for (let i = 0; i < drawingsWithPh.length; i++) {
	drawingsWithPh[i].Delete();
}

```
