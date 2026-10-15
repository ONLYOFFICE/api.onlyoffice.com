# GetSpacingLineValue

Returns the paragraph line spacing value.

Inherited from [ApiParaPr.GetSpacingLineValue](../../ApiParaPr/Methods/GetSpacingLineValue.md).

## Syntax

```javascript
expression.GetSpacingLineValue();
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md) \| [line240](../../Enumeration/line240.md) \| undefined

## Example

Read the line spacing value applied to a paragraph in a document.

```javascript editor-docx
// How do I get the numeric line spacing value of a paragraph in a document?

// Append the measured line spacing number to the paragraph to make it visible in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingLineValue = paragraph.GetSpacingLineValue();
paragraph.AddText("Spacing line value: " + spacingLineValue);
```
