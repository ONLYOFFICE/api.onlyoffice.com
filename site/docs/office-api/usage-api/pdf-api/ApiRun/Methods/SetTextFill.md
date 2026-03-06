# SetTextFill

Sets the text fill to the current text run.

## Syntax

```javascript
expression.SetTextFill(oApiFill);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the text color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text fill to the current text run.

```javascript editor-pdf
// How to change a font color.

// Get the text properties of the run and color its font.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
textPr.SetTextFill(fill);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the black text fill set using the text properties.");
paragraph.AddElement(run);
page.AddObject(shape);

```
