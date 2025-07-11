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

This example shows how to get the specified level of the numbering.

```javascript editor-docx
// How to find out the level of the bulleted paragraph.

// Print the level of numbering of the text.

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
