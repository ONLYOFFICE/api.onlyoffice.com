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

Write text into a run and place it inside a shape on a worksheet in a spreadsheet.

```javascript editor-xlsx
// How do I put readable text inside a shape in a spreadsheet?

// Build a styled text run and attach it to a paragraph within a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(30);
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
```
