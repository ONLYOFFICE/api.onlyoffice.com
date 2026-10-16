# AddText

Adds some text to the current run.

## Syntax

```javascript
expression.AddText(text, widths);
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string \| number[] |  | The text which will be added to the current run. It can be a string or an array of Unicode code points. |
| widths | Optional | number[] |  | An array of character widths (in millimeters). It should be the same length as the array of code points passed in the "text" parameter. When the widths are specified, the characters are added preserving these exact widths. |

## Returns

boolean

## Example

Add text to a text run in a presentation.

```javascript editor-pptx
// How do I insert text into a text run in a presentation?

// Include text content on a slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
