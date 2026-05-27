# GetSpacingAfter

Returns the spacing after value of the current paragraph.

## Syntax

```javascript
expression.GetSpacingAfter();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

Read the space-after value set on a paragraph and display it in a document.

```javascript editor-docx
// How do I get the amount of spacing after a paragraph in a document?

// Verify the gap between paragraphs by retrieving and printing the spacing-after measurement in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
let paraPr = paragraph1.GetParaPr();
paraPr.SetSpacingAfter(1440);
paragraph1.AddText("This is an example of setting a space after a paragraph. ");
paragraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph1.AddText("This is due to the fact that the first paragraph has this offset enabled.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph2.AddLineBreak();
let spacingAfter = paraPr.GetSpacingAfter();
paragraph2.AddText("Spacing after: " + spacingAfter);
doc.Push(paragraph2);
```
