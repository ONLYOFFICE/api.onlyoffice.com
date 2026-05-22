# GetSpacingBefore

Returns the spacing before value of the current paragraph.

## Syntax

```javascript
expression.GetSpacingBefore();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

Read the space-before value set on a paragraph and display it in a document.

```javascript editor-docx
// How do I get the amount of spacing before a paragraph in a document?

// Verify the gap above a paragraph by retrieving and printing the spacing-before measurement in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingBefore(1440);
paragraph.AddLineBreak();
let spacingBefore = paraPr.GetSpacingBefore();
paragraph.AddText("Spacing before: " + spacingBefore);
doc.Push(paragraph);
```
