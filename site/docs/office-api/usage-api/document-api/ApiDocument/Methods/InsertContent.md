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

Insert a collection of elements at the current position in a document.

```javascript editor-docx
// How do I add multiple paragraphs at once to a document?

// Programmatically place pre-built content blocks into the document without appending them one by one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text. It was inserted here.");
doc.InsertContent([paragraph]);
```
