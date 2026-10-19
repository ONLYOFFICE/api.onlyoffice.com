# SetText

Replaces the whole text of the current run with the specified text, keeping the run properties.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string \| number[] |  | The new text of the run, as a string or as an array of character codes. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Replace the whole text of a run in one call in a PDF.

```javascript editor-pdf
// How do I replace the text of a run without losing its formatting in a PDF?

// Swap the wording of a run on the page while its formatting stays in place in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetBold(true);
run.SetFontSize(30);
run.AddText("Draft wording.");
paragraph.AddElement(run);
run.SetText("Final wording, still bold.");
page.AddObject(shape);
```
