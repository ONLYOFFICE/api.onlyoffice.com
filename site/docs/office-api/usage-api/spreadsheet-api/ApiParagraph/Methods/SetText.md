# SetText

Replaces the paragraph content with the specified text.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text to set. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Replace the text of a paragraph inside a shape in a spreadsheet.

```javascript editor-xlsx
// How do I overwrite a paragraph's text inside a shape in a spreadsheet?

// Clear a paragraph and write a new sentence into it using a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Original text inside the shape.");
paragraph.SetText("Updated text inside the shape.");
```
