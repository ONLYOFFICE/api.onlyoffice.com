# GetTextRange

Returns an ApiTextRange object that represents the part of the text contained in the current document content.

## Syntax

```javascript
expression.GetTextRange(start, end);
```

`expression` - A variable that represents an [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | Optional | number | 0 | Start character position (0-based, inclusive). |
| end | Optional | number |  | End character position (0-based, exclusive). Defaults to the end of the content. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Take a text range over the whole text of a shape on a worksheet and make it bold.

```javascript editor-xlsx
// The text of a shape is addressed by character positions, so a range can cover any part of it.

// Get the range of the shape text body and apply bold to the first word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = docContent.GetTextRange(0, 5);
range.SetBold(true);
```
