# GetIndFirstLine

Returns the paragraph first line indentation.

Inherited from [ApiParaPr.GetIndFirstLine](../../ApiParaPr/Methods/GetIndFirstLine.md).

## Syntax

```javascript
expression.GetIndFirstLine();
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md) \| undefined

## Example

Read the first-line indentation value set on a paragraph in a document.

```javascript editor-docx
// How do I find out how far the first line of a paragraph is indented in a document?

// Verify a programmatically applied first-line indent by reading it back in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the indent of 1 inch set to the first line. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetIndFirstLine(1440);
let indFirstLine = paragraph.GetIndFirstLine();
paragraph = Api.CreateParagraph();
paragraph.AddText("First line indent: " + indFirstLine);
doc.Push(paragraph);
```
