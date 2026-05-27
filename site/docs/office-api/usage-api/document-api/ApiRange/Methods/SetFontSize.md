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

Change the text size for a range of characters in a document.

```javascript editor-docx
// How do I make a section of text larger or smaller in a document?

// Resize the letters in a chosen portion of text to stand out or fit better in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetFontSize(14);
```
