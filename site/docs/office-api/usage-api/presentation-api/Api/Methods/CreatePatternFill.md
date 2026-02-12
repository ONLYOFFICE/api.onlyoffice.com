# CreatePatternFill

Creates a pattern fill to apply to the object using the selected pattern as the object background.

## Syntax

```javascript
expression.CreatePatternFill(patternType, bgColor, fgColor);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| patternType | Required | [PatternType](../../Enumeration/PatternType.md) |  | The pattern type used for the fill selected from one of the available pattern types. |
| bgColor | Required | [ApiUniColor](../../ApiUniColor/ApiUniColor.md) |  | The background color used for the pattern creation. |
| fgColor | Required | [ApiUniColor](../../ApiUniColor/ApiUniColor.md) |  | The foreground color used for the pattern creation. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example creates a pattern fill and applies it to the object using the selected pattern as the object background.

```javascript editor-pptx
// How to apply pattern to the background of a drawing.

// Change color of an element using a pattern fill.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);

```
