# SetDoubleStrikeout

Specifies that the contents of the current run are displayed with two horizontal lines through each character displayed on the line.

## Syntax

```javascript
expression.SetDoubleStrikeout(isDoubleStrikeout);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDoubleStrikeout | Required | boolean |  | Specifies that the contents of the current run are displayed double struck through. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Strike through text with two horizontal lines in a presentation.

```javascript editor-pptx
// What is double strikeout formatting in a presentation?

// Apply double strikeout formatting to text in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetDoubleStrikeout(true);
run.AddText("This is a text run with the text struck out with two lines.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
