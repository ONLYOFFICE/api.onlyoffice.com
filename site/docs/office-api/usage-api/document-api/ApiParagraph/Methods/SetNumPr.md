# SetNumPr

Specifies that the current paragraph references a numbering definition instance in the current document.

Inherited from [ApiParaPr.SetNumPr](../../ApiParaPr/Methods/SetNumPr.md).

## Syntax

```javascript
expression.SetNumPr(oNumPr, nLvl);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oNumPr | Required | [ApiNumbering](../../ApiNumbering/ApiNumbering.md) |  | Specifies a numbering definition. |
| nLvl | Optional | number | 0 | Specifies a numbering level reference. If the current instance of the ApiParaPr class is direct formatting of a paragraph, then this parameter MUST BE specified. Otherwise, if the current instance of the ApiParaPr class is the part of ApiStyle properties, this parameter will be ignored. |

## Returns

boolean

## Example

Assign a specific numbering level from an existing list to a paragraph in a document.

```javascript editor-docx
// How do I link a paragraph to a particular level of a numbered or bulleted list in a document?

// Place a paragraph at a chosen depth within a list hierarchy in a document.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.SetNumPr(numbering, 3);
paragraph.AddText("This is a paragraph styled as level 4 of a bulleted list.");
doc.Push(paragraph);
```
