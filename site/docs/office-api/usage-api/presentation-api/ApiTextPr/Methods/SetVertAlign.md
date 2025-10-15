# SetVertAlign

Specifies the alignment which will be applied to the contents of the run in relation to the default appearance of the run text:
-**"baseline"** - the characters in the current text run will be aligned by the default text baseline.
-**"subscript"** - the characters in the current text run will be aligned below the default text baseline.
-**"superscript"** - the characters in the current text run will be aligned above the default text baseline.

## Syntax

```javascript
expression.SetVertAlign(sType);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "baseline" \| "subscript" \| "superscript" |  | The vertical alignment type applied to the text contents. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies the alignment which will be applied to the contents of the run in relation to the default appearance of the run text.

```javascript editor-pptx
// How to set a vertical alignment of the text.

// Get the text properties of the run and make it superscript, subscript, etc.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetVertAlign("superscript");
paragraph.SetJc("left");
run.AddText("This is a text inside the shape with vertical alignment set to 'superscript'.");
paragraph.AddElement(run);
slide.AddObject(shape);

```
