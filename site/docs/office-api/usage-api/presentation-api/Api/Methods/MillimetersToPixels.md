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

Convert millimeters to pixels in a presentation.

```javascript editor-pptx
// Use the Api object to convert measurement units.

// Display the conversion result in a shape on the slide.

const millimeters = 100;
const pixels = Api.MillimetersToPixels(millimeters);

const rgb = Api.RGB(50, 150, 250);
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
