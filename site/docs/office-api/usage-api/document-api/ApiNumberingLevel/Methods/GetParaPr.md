# GetParaPr

Returns the paragraph properties which are applied to any numbered paragraph that references the given numbering definition and numbering level.

## Syntax

```javascript
expression.GetParaPr();
```

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## Example

Apply paragraph formatting to numbered paragraphs through a list level definition in a document.

```javascript editor-docx
// How do I adjust spacing and indentation for a numbered list level in a document?

// Control line spacing and alignment of list items by editing the level's paragraph properties in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let paraPr = numLvl.GetParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
paraPr.SetIndFirstLine(720);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a parent numbered list which starts with '1'");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second element of a parent numbered list which starts with '2'");
paragraph.SetNumbering(numLvl);
doc.Push(paragraph);
```
