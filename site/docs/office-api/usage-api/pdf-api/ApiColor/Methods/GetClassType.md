# GetClassType

Returns a type of the ApiColor class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"color"

## Example

This example gets a class type and pastes it into the pdf document.

```javascript editor-pdf
// How to get a class type of ApiColor.

// Retrieve class type of ApiColor object and insert it to the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const color = Api.RGB(255, 0, 0);
const classType = color.GetClassType();
run.SetFontSize(30);
run.AddText("Class Type = " + classType);
paragraph.AddElement(run);
page.AddObject(shape);

```
