# MillimetersToEmus

Converts millimeters to English Metric Units (EMUs).
The result is an integer value.

## Syntax

```javascript
expression.MillimetersToEmus(mm);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mm | Required | [mm](../../Enumeration/mm.md) |  | The value in millimeters. |

## Returns

[EMU](../../Enumeration/EMU.md)

## Example

Convert millimeters to emus in a presentation.

```javascript editor-pptx
// Convert measurement units using the Api object.

// Display the conversion result in a shape on the slide.

const millimeters = 0.2001;
const emus = Api.MillimetersToEmus(millimeters);

const rgb = Api.CreateRGBColor(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(millimeters + ' millimeters are equal to ' + emus + ' emus (value is rounded to integer).');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
