# SetCustomType

Sets your own customized numbering type.

## Syntax

```javascript
expression.SetCustomType(sType, sTextFormatString, sAlign);
```

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "none" \| "bullet" \| "decimal" \| "lowerRoman" \| "upperRoman" \| "lowerLetter" \| "upperLetter" \| "decimalZero" |  | The custom numbering type used for the current numbering definition. |
| sTextFormatString | Required | string |  | Any text in this parameter will be taken as literal text to be repeated in each instance of this numbering level, except for any use of the percent symbol (%) followed by a number, which will be used to indicate the one-based index of the number to be used at this level. Any number of a level higher than this level will be ignored. |
| sAlign | Required | "left" \| "right" \| "center" |  | Type of justification applied to the text run in the current numbering level. |

## Returns

boolean

## Example

This example sets your own customized numbering type.

```javascript editor-docx
// How to set the custom type of the numbering.

// Apply the lower roman style to the numbering level.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let formatString = "";
	for (let nTempLvl = 1; nTempLvl <= (lvl + 1); ++nTempLvl) formatString += "%" + nTempLvl + ".";
	numLvl.SetCustomType("lowerRoman", formatString, "left");
	numLvl.SetStart(lvl + 1);
	numLvl.SetSuff("space");
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Custom numbered lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
```
