# GetIndFirstLine

Returns the paragraph first line indentation.

## Syntax

```javascript
expression.GetIndFirstLine();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md) \| undefined

## Example

Get the paragraph first line indentation in a document.

```javascript editor-docx
// How to get the indentation of the first sentence line of the paragraph in a document.

// Print the identation of the line of a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetIndFirstLine(1440);
paragraph.AddText("This is the first paragraph with the indent of 1 inch set to the first line. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let indFirstLine = paraPr.GetIndFirstLine();
paragraph = Api.CreateParagraph();
paragraph.AddText("First line indent: " + indFirstLine);
doc.Push(paragraph);
```
