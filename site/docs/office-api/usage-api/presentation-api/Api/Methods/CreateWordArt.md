# CreateWordArt

Creates a Text Art object with the parameters specified.

## Syntax

```javascript
expression.CreateWordArt(oTextPr, sText, sTransform, oFill, oStroke, nRotAngle, nWidth, nHeight, nIndLeft, nIndTop);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Optional | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | Api.CreateTextPr() | The text properties. |
| sText | Optional | string | "Your text here" | The text for the Text Art object. |
| sTransform | Optional | [TextTransform](../../Enumeration/TextTransform.md) | "textNoShape" | Text transform type. |
| oFill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | The color or pattern used to fill the Text Art object. |
| oStroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | The stroke used to create the Text Art object shadow. |
| nRotAngle | Optional | number | 0 | Rotation angle. |
| nWidth | Optional | [EMU](../../Enumeration/EMU.md) | 1828800 | The Text Art width measured in English measure units. |
| nHeight | Optional | [EMU](../../Enumeration/EMU.md) | 1828800 | The Text Art heigth measured in English measure units. |
| nIndLeft | Optional | [EMU](../../Enumeration/EMU.md) | ApiPresentation.GetWidth() / 2 | The Text Art left side indentation value measured in English measure units. |
| nIndTop | Optional | [EMU](../../Enumeration/EMU.md) | ApiPresentation.GetHeight() / 2 | The Text Art top side indentation value measured in English measure units. |

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## Example

This example creates a Text Art object with the "textArchUp" text transform type.

```javascript editor-pptx playground
// How to create word art indicating its text properties.

// Add arch up text word art.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(72);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetColor(51, 51, 51, false);
textPr.SetFontFamily("Comic Sans MS");
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
const textArt = Api.CreateWordArt(textPr, "onlyoffice", "textArchUp", fill, stroke, 0, 100 * 36000, 30 * 36000);
slide.AddObject(textArt);

```
