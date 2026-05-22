# SetTextPr

Sets the text properties to the current run.

## Syntax

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current run. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Apply a full set of formatting properties to a text run in a spreadsheet.

```javascript editor-xlsx
// How do I update the font size, weight, and other appearance settings for text in a spreadsheet?

// Bundle multiple style choices — such as bold and size — into one step when formatting a text run in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a sample text with the font size set to 15 points and the font weight set to bold.");
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetBold(true);
run.SetTextPr(textProps);
paragraph.AddElement(run);
```
