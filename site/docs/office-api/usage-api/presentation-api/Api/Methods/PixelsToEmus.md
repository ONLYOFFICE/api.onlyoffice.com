# PixelsToEmus

Converts pixels to EMUs (English Metric Units).

## Syntax

```javascript
expression.PixelsToEmus(px);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| px | Required | number |  | The number of pixels to convert to EMUs. |

## Returns

number

## Example

Convert pixels to english metric units in a presentation.

```javascript editor-pptx
// Convert measurement units using the Api object.

// Display the conversion result in a shape on the slide.

const pixels = 1080;
const emus = Api.PixelsToEmus(pixels);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(pixels + ' pixels are equal to ' + emus + ' english metric units.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
