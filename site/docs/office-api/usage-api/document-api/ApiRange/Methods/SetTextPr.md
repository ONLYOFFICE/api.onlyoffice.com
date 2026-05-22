# SetTextPr

Sets the text properties to the current Range.

## Syntax

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be applied to the current range. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Apply a full set of text formatting properties to a selected range in a document.

```javascript editor-docx
// How do I copy formatting settings from one place and stamp them onto a text range in a document?

// Transfer font style, size, and other attributes onto a chosen portion of text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let textPr = paragraph.GetTextPr();
textPr.SetItalic(true);
let range = doc.GetRange(0, 24);
range.SetTextPr(textPr);
```
