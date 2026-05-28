# SetNumPr

Specifies that the current paragraph references a numbering definition instance in the current document.

## Syntax

```javascript
expression.SetNumPr(oNumPr, nLvl);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oNumPr | Required | [ApiNumbering](../../ApiNumbering/ApiNumbering.md) |  | Specifies a numbering definition. |
| nLvl | Optional | number | 0 | Specifies a numbering level reference. If the current instance of the ApiParaPr class is direct formatting of a paragraph, then this parameter MUST BE specified. Otherwise, if the current instance of the ApiParaPr class is the part of ApiStyle properties, this parameter will be ignored. |

## Returns

boolean

## Example

Attach a numbering definition to a paragraph to make it part of a list in a document.

```javascript editor-docx
// How do I apply a bullet or numbered list style to a paragraph in a document?

// Format a paragraph as a bulleted list item using a shared numbering definition.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
let numbering = doc.CreateNumbering("bullet");
paraPr.SetNumPr(numbering);
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
paragraph.AddText("This is a paragraph styled as a bulleted list.");
doc.Push(paragraph);
```
