# GetLevel

Returns the specified level of the current numbering.

## Syntax

```javascript
expression.GetLevel(nLevel);
```

`expression` - A variable that represents a [ApiNumbering](../ApiNumbering.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLevel | Required | number |  | The numbering level index. This value MUST BE from 0 to 8. |

## Returns

[ApiNumberingLevel](../../ApiNumberingLevel/ApiNumberingLevel.md)

## Example

Access a specific level of a numbered list in a document.

```javascript editor-docx
// How do I get a particular numbering level from a list definition in a document?

// Assign each paragraph to its own list level to create a multi-level bulleted outline in a document.

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
```
