# GetTextRange

Returns an ApiTextRange object that represents the part of the text contained in the current hyperlink.

## Syntax

```javascript
expression.GetTextRange(start, end);
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | Optional | number | 0 | Start character position (0-based, inclusive) relative to the hyperlink. |
| end | Optional | number |  | End character position (0-based, exclusive). Defaults to the end of the hyperlink. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Make the text of a hyperlink in a shape on a worksheet italic through a text range.

```javascript editor-xlsx
// A hyperlink keeps its own runs, and the range covers exactly the text of the link.

// Take the range of the whole hyperlink text and apply italic to it.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Open ");
let hyperlink = paragraph.AddHyperlink("https://www.onlyoffice.com", "ONLYOFFICE");

let range = hyperlink.GetTextRange();
range.SetItalic(true);
```
