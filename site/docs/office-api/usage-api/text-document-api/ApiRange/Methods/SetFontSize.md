# SetFontSize

Sets the font size to the characters of the current text Range.

## Syntax

```javascript
expression.SetFontSize(FontSize);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| FontSize | Required | [hps](../../Enumeration/hps.md) |  | The text size value measured in half-points (1/144 of an inch). |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Set the font size to the characters of the text Range in a document.

```javascript editor-docx
// How to change the range text font size in a document.

// Get a range, resize its font in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetFontSize(14);
```
