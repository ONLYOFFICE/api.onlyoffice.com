# SetTemplateType

Sets one of the existing predefined numbering templates.

## Syntax

```javascript
expression.SetTemplateType(sType, sSymbol);
```

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "none" \| "bullet" \| "1)" \| "1." \| "I." \| "A." \| "a)" \| "a." \| "i." |  | The predefined numbering template. |
| sSymbol | Optional | string | "" | The symbol used for the list numbering. This parameter has the meaning only if the predefined numbering template is "bullet". |

## Returns

boolean

## Example

Apply a predefined numbering template to a list level in a document.

```javascript editor-docx
// How do I switch a list to use an alphabetic "A., B., C." numbering template in a document?

// Choose from built-in list styles to quickly format a numbered list without defining a custom type in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
numLvl.SetTemplateType("A.");
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of an A.-B.-C. numbered list");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the second element of an A.-B.-C. numbered list");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the third element of an A.-B.-C. numbered list");
doc.Push(paragraph);
```
