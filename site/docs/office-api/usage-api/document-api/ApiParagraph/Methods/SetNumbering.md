# SetNumbering

Specifies that the current paragraph references the numbering definition instance in the current document.

## Syntax

```javascript
expression.SetNumbering(numberingLevel);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| numberingLevel | Required | [ApiNumberingLevel](../../ApiNumberingLevel/ApiNumberingLevel.md) \| null \| undefined |  | The numbering level which will be used for assigning the numbers to the paragraph, or *undefined*/*null* to remove numbering. |

## Returns

boolean

## Example

Apply a bullet or numbered list style to paragraphs in a document.

```javascript editor-docx
// How do I create a multi-level bulleted list from a set of paragraphs in a document?

// Turn plain paragraphs into an ordered or unordered list in a document.

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
```
