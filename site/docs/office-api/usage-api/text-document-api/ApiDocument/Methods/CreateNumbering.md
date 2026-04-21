# CreateNumbering

Creates an abstract multilevel numbering with a specified type.

## Syntax

```javascript
expression.CreateNumbering(sType);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Optional | "bullet" \| "numbered" | "bullet" | The type of the numbering which will be created. |

## Returns

[ApiNumbering](../../ApiNumbering/ApiNumbering.md)

## Example

Create an abstract multilevel numbering with a "bullet" type in a document.

```javascript editor-docx
// How to add a paragraph with numbering in a document.

// Add a text to the paragraph, make it bulleted in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default numbered lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
```
