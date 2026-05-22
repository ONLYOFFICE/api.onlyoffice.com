# GetClassType

Returns a type of the ApiNumberingLevel class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"numberingLevel"

## Example

Retrieve the class type of a numbering level object in a document.

```javascript editor-docx
// How do I identify the class type of a numbering level in a document?

// Verify the object type of a list level before using it in further processing in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + numbering.GetLevel(0).GetClassType());
```
