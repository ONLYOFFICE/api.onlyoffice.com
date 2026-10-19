# InsertContent

Inserts an array of elements into the current position of the document. The array may contain a mix of element types:
- \{@link DocumentElement\} elements are inserted as-is.
- \{@link ParagraphContent\} elements are automatically grouped into paragraphs: consecutive paragraph-level elements   share one new paragraph.
- Plain strings and numbers are wrapped in a new run and added to the current paragraph (same grouping rules as \{@link ParagraphContent\}).
- \{@link ApiDrawing\} elements are wrapped in a new run and added to the current paragraph. Elements that are already in use in a document are skipped.

## Syntax

```javascript
expression.InsertContent(content, isInline, pr);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| content | Required | ([DocumentElement](../../Enumeration/DocumentElement.md) \| [ParagraphContent](../../Enumeration/ParagraphContent.md) \| [ApiDrawing](../../ApiDrawing/ApiDrawing.md) \| string \| number)[] |  | An array of elements to insert. |
| isInline | Optional | boolean | false | Inline insert or not (works only for the last and the first element and only if it's a paragraph). |
| pr | Optional | object |  | Insert options. |
| pr.KeepTextOnly | Optional | boolean | false | Specifies that text and paragraph document properties are preserved for the inserted elements. |
| pr.OverwriteTableCells | Optional | boolean | false | Specifies that if a single table is inserted into a table cell, it overwrites the content of the existing cells, starting from the current one, instead of being inserted as a nested table. |

## Returns

boolean

## Example

Insert paragraphs, plain strings, and inline runs as mixed content in a single call.

```javascript editor-docx
// Consecutive inline items are automatically grouped into one new paragraph.

// All element types — block-level, string literals, and runs — are accepted in the same array.

let doc = Api.GetDocument();
let para = Api.CreateParagraph();
para.AddText("Block paragraph");
let run = Api.CreateRun();
run.AddText(" and a run");
doc.InsertContent([para, "Plain string", run]);
```
