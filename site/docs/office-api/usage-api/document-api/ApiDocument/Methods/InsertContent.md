# InsertContent

Inserts an array of elements into the current position of the document.

## Syntax

```javascript
expression.InsertContent(arrContent, isInline, oPr);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrContent | Required | [DocumentElement](../../Enumeration/DocumentElement.md)[] |  | An array of elements to insert. |
| isInline | Optional | boolean | false | Inline insert or not (works only for the last and the first element and only if it's a paragraph). |
| oPr | Optional | object |  | Specifies that text and paragraph document properties are preserved for the inserted elements.  The object should look like this: \{"KeepTextOnly": true\}. |

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
