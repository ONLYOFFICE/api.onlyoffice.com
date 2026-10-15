# SetTextFill

Sets the text fill to the current text run.

Inherited from [ApiTextPr.SetTextFill](../../ApiTextPr/Methods/SetTextFill.md).

## Syntax

```javascript
expression.SetTextFill(oApiFill);
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the text color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Fill the letters of a text run with a solid color in a spreadsheet.

```javascript editor-xlsx
// How do I change the color of specific words inside a shape in a spreadsheet?

// Paint selected text in a chosen color to make it visually distinct from surrounding content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
fill = Api.CreateSolidFill(Api.RGB(128, 128, 128));
run.SetTextFill(fill);
run.AddText("This is a text run with the gray text.");
paragraph.AddElement(run);
```
