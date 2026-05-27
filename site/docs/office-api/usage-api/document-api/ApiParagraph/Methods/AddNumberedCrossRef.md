# AddNumberedCrossRef

Adds a numbered cross-reference to the current paragraph.
💡 Please note that this paragraph must be in the document.

## Syntax

```javascript
expression.AddNumberedCrossRef(sRefType, oParaTo, bLink, bAboveBelow, sSepWith);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRefType | Required | [numberedRefTo](../../Enumeration/numberedRefTo.md) |  | The text or numeric value of a numbered reference you want to insert. |
| oParaTo | Required | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | The numbered paragraph to be referred to (must be in the document). |
| bLink | Optional | boolean | true | Specifies if the reference will be inserted as a hyperlink. |
| bAboveBelow | Optional | boolean | false | Specifies if the above/below words indicating the position of the reference should be included (don't used with the "text" and "aboveBelow" sRefType). |
| sSepWith | Optional | string | "" | A number separator (used only with the "fullCtxParaNum" sRefType). |

## Returns

boolean

## Example

Insert a cross-reference to a numbered list item into a paragraph in a document.

```javascript editor-docx
// How do I cite a specific numbered paragraph from elsewhere in the text in a document?

// Embed the list number of another paragraph so readers can identify the exact item being referenced in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
for (let i = 0; i < 8; ++i) {
	let numLvl = numbering.GetLevel(i);
	let formatString = "";
	for (let nTempLvl = 0; nTempLvl <= i; ++nTempLvl) 
		formatString += "%" + nTempLvl + ".";
	numLvl.SetCustomType("lowerRoman", formatString, "left");
	numLvl.SetStart(i + 1);
	numLvl.SetSuff("space");
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Custom numbered lvl " + (i + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let numberedParagraphs = doc.GetAllNumberedParagraphs();
let paragraph = Api.CreateParagraph();
paragraph.AddText("An example of the customized numbering type can be found in the paragraph № ");
doc.Push(paragraph);
paragraph.AddNumberedCrossRef("paraNum", numberedParagraphs[1], true, true);
```
