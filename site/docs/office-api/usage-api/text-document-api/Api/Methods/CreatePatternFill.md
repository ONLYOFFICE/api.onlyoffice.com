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

```javascript editor-docx
// Creates the ApiFill object using the "dashDnDiag" pattern type and applies it to the created shape.

// How to create a pattern fill for the ApiShape object background.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);
```
