# AddEndnoteCrossRef

Adds an endnote cross-reference to the current paragraph.
💡 Please note that this paragraph must be in the document.

## Syntax

```javascript
expression.AddEndnoteCrossRef(sRefType, oParaTo, bLink, bAboveBelow);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRefType | Required | [endnoteRefTo](../../Enumeration/endnoteRefTo.md) |  | The text or numeric value of an endnote reference you want to insert. |
| oParaTo | Required | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | The first paragraph from an endnote to be referred to (must be in the document). |
| bLink | Optional | boolean | true | Specifies if the reference will be inserted as a hyperlink. |
| bAboveBelow | Optional | boolean | false | Specifies if the above/below words indicating the position of the reference should be included (don't used with the "aboveBelow" sRefType). |

## Returns

boolean

## Example

Add an endnote cross-reference to the paragraph in a document.

```javascript editor-docx
// How to create an endnote reference to the paragraph in a document.

// Add a cross-reference to the endnote of the paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddEndnote();
let endNotesFirstParagraphs = doc.GetEndNotesFirstParagraphs();
endNotesFirstParagraphs[0].AddText("Endnote 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("For more information on previous sentences see endnote on page ");
doc.Push(paragraph);
paragraph.AddEndnoteCrossRef("pageNum", endNotesFirstParagraphs[0]);
```
