# GetSpacingAfter

Returns the spacing after value of the current paragraph.

Inherited from [ApiParaPr.GetSpacingAfter](../../ApiParaPr/Methods/GetSpacingAfter.md).

## Syntax

```javascript
expression.GetSpacingAfter();
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

Read the spacing-after value of a paragraph in a document.

```javascript editor-docx
// How do I retrieve the space added after a paragraph in a document?

// Verify the exact gap set below a paragraph before displaying it as text in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is an example of setting a space after a paragraph. ");
paragraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph1.AddText("This is due to the fact that the first paragraph has this offset enabled.");
paragraph1.SetSpacingAfter(1440);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph2.AddLineBreak();
let spacingAfter = paragraph1.GetSpacingAfter();
paragraph2.AddText("Spacing after: " + spacingAfter);
doc.Push(paragraph2);
```
