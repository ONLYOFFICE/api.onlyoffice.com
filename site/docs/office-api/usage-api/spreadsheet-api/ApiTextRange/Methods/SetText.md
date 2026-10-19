# SetText

Replaces all text content with the given string. Use "\r" to separate paragraphs.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | New text value. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Replace the text covered by a text range in a shape on a worksheet.

```javascript editor-xlsx
// The new text takes the formatting of the text it replaces.

// Replace the second word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(6, 11).SetText("Everyone");

worksheet.GetRange("A1").SetValue("SetText: " + shape.GetTextRange().GetText());
```
