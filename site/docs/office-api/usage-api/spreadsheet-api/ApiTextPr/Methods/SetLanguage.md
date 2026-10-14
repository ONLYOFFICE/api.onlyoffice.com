# SetLanguage

Specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of the text run.

## Syntax

```javascript
expression.SetLanguage(langId);
```

`expression` - A variable that represents an [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| langId | Required | string \| null |  | The possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". Pass *null* to remove the language. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Set the spell-check language through the text properties of a run in a spreadsheet.

```javascript editor-xlsx
// How do I choose the proofing language with text properties in a spreadsheet?

// Get the text properties of a run inside a shape and assign a language code so the text is checked against the matching dictionary in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetLanguage("en-CA");
paragraph.SetJc("left");
run.AddText("This is a sample text.");
paragraph.AddElement(run);
```
