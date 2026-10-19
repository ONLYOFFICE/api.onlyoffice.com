# GetSpacingBefore

Returns the spacing before value of the current paragraph.

Inherited from [ApiParaPr.GetSpacingBefore](../../ApiParaPr/Methods/GetSpacingBefore.md).

## Syntax

```javascript
expression.GetSpacingBefore();
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

Read the spacing-before value of a paragraph in a document.

```javascript editor-docx
// How do I retrieve the space added before a paragraph in a document?

// Confirm the top gap of a paragraph by reading it back and appending it as text in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is an example of setting a space before a paragraph. ");
paragraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph1.AddText("This is due to the fact that the second paragraph has this offset enabled.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph2.SetSpacingBefore(1440);
paragraph2.AddLineBreak();
let spacingBefore = paragraph2.GetSpacingBefore();
paragraph2.AddText("Spacing before: " + spacingBefore);
doc.Push(paragraph2);
```
