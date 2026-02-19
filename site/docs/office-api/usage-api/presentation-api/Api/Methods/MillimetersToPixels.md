# MillimetersToPixels

Converts millimeters to pixels.

## Syntax

```javascript
expression.MillimetersToPixels(mm);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mm | Required | number |  | The number of millimeters to convert to pixels. |

## Returns

number

## Example

This example shows how to convert millimeters to pixels.

```javascript editor-pptx
const millimeters = 100;
const pixels = Api.MillimetersToPixels(millimeters);

const rgb = Api.CreateRGBColor(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(millimeters + ' millimeters are equal to ' + pixels + ' pixels.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
