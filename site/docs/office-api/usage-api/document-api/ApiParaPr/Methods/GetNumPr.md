# GetNumPr

Returns the numbering level for the current paragraph referencing the numbering definition instance in the current document.

## Syntax

```javascript
expression.GetNumPr();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiNumberingLevel](../../ApiNumberingLevel/ApiNumberingLevel.md) \| undefined

## Example

Retrieve the numbering properties of a bulleted paragraph in a document.

```javascript editor-docx
// How do I read the numbering settings assigned to a paragraph in a document?

// Confirm which list level is active by checking the class type of the numbering properties in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
let numLvl = numbering.GetLevel(0);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is a bulleted paragraph.");
let paraPr = paragraph.GetParaPr();
let numPr = paraPr.GetNumPr();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Numbering class type: " + (numPr ? numPr.GetClassType() : "none"));
doc.Push(paragraph2);
```
