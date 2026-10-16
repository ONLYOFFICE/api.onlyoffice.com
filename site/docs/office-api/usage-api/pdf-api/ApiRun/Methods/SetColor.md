# SetColor

Sets the text color to the current text run.

Inherited from [ApiTextPr.SetColor](../../ApiTextPr/Methods/SetColor.md).

## Syntax

```javascript
expression.SetColor(color);
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) \| null |  | The text color. Pass *null* to remove the text color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Apply text color in a PDF.

```javascript editor-pdf
// How do I change the text appearance in a PDF?

// Modify the color of text characters in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is a text run with the font color set to black.");
paragraph.AddElement(run);
run.SetColor(Api.RGB(51, 51, 51));
page.AddObject(shape);
```
