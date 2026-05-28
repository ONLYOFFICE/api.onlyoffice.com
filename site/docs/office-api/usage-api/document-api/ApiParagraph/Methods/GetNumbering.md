# GetNumbering

Returns the numbering definition and numbering level for the numbered list.

## Syntax

```javascript
expression.GetNumbering();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiNumberingLevel](../../ApiNumberingLevel/ApiNumberingLevel.md)

## Example

Read the numbering definition and level assigned to a list paragraph in a document.

```javascript editor-docx
// How do I retrieve the numbering settings from a paragraph in a document?

// Build a numbered list and confirm the numbering is applied by reading it back in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first element of a numbered list");
paragraph.SetNumbering(numLvl);
paragraph.SetContextualSpacing(true);
let numbering1 = paragraph.GetNumbering();
numLvl = numbering.GetLevel(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second element of a numbered list");
paragraph.SetNumbering(numLvl);
paragraph.SetContextualSpacing(true);
doc.Push(paragraph);
```
