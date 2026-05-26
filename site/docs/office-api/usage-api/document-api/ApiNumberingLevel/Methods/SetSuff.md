# SetSuff

Specifies the content which will be added between the given numbering level text and the text of every numbered paragraph which references that numbering level. By default this value is "tab".

## Syntax

```javascript
expression.SetSuff(sType);
```

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "space" \| "tab" \| "none" |  | The content added between the numbering level text and the text in the numbered paragraph. |

## Returns

boolean

## Example

Set the separator character between a numbering label and its paragraph text in a document.

```javascript editor-docx
// How do I add a space between the list number and the paragraph content in a document?

// Control what follows the list marker before each item's text begins in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
numLvl.SetCustomType("decimalZero", "repeating text %1", "left");
numLvl.SetSuff("space");
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a numbered list using custom text with numbering");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the second element of a numbered list using custom text with numbering");
doc.Push(paragraph);
```
