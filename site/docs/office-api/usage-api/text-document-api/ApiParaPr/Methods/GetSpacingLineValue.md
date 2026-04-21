# GetSpacingLineValue

Returns the paragraph line spacing value.

## Syntax

```javascript
expression.GetSpacingLineValue();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md) \| [line240](../../Enumeration/line240.md) \| undefined

## Example

Get the paragraph line spacing value in a document.

```javascript editor-docx
// How to get the spacing line value of the paragraph and display it in a document.

// Get the paragraph spacing line value in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingLineValue = paraPr.GetSpacingLineValue();
paragraph.AddText("Spacing line value: " + spacingLineValue);
```
