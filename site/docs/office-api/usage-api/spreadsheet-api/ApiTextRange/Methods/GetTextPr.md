# GetTextPr

Returns the merged text properties of the entire range.

## Syntax

```javascript
expression.GetTextPr();
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Read the text properties of a text range in a shape on a worksheet.

```javascript editor-xlsx
// The properties describe the formatting of the text the range covers.

// Read back the bold flag applied to the first word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(0, 5).SetBold(true);
let textPr = range.GetRange(0, 5).GetTextPr();

worksheet.GetRange("A1").SetValue("GetTextPr: " + textPr.GetBold());
```
