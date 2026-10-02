# GetIndLeft

Returns the paragraph left side indentation.

Inherited from [ApiParaPr.GetIndLeft](../../ApiParaPr/Methods/GetIndLeft.md).

## Syntax

```javascript
expression.GetIndLeft();
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md) \| undefined

## Example

Read the left indentation value set on a paragraph in a document.

```javascript editor-docx
// How do I find out how much a paragraph is indented from the left margin in a document?

// Confirm a programmatically applied left indent by reading it back in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetIndLeft(2880);
let indLeft = paragraph.GetIndLeft();
paragraph = Api.CreateParagraph();
paragraph.AddText("Left indent: " + indLeft);
doc.Push(paragraph);
```
