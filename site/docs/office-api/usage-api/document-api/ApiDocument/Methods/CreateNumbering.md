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

Add a multilevel bulleted list across eight indent levels in a document.

```javascript editor-docx
// How do I create a numbered or bulleted list with multiple levels in a document?

// Apply a consistent bullet style to every level so readers can follow nested structure at a glance in a document.

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
