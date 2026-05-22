# AddText

Adds some text to the current paragraph.

## Syntax

```javascript
expression.AddText(text);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text that we want to insert into the current document element. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Write text directly into a paragraph inside a shape in a spreadsheet.

```javascript editor-xlsx
// How do I put words into a paragraph that sits inside a shape in a spreadsheet?

// Fill a shape with left-aligned text split across two lines using a line break in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("This is a text inside the shape aligned left.");
paragraph.AddLineBreak();
paragraph.AddText("This is a text after the line break.");
```
