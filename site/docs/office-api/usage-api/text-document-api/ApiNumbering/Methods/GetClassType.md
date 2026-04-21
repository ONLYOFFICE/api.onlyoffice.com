# GetClassType

Returns a type of the ApiNumbering class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiNumbering](../ApiNumbering.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"numbering"

## Example

Retrieve the class type of a numbering in a document.

```javascript editor-docx
// How to identify the class type of a numbering in a document?

// Obtain the class type identifier of a numbering object in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	let numLvl = numbering.GetLevel(nLvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (nLvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let classType = numbering.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
