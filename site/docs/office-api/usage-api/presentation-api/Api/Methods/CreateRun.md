# CreateRun

Creates a new smaller text block to be inserted to the current paragraph or table.

## Syntax

```javascript
expression.CreateRun();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example creates a run and inserts it into the document.

```javascript editor-pptx
// How to add text.

// Add an ApiRun object that represents a text.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(60);
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetFontSize(60);
run.SetFontFamily("Comic Sans MS");
run.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
paragraph.AddElement(run);
slide.AddObject(shape);

```
