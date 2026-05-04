# MoveCursorToPos

Moves a cursor to a specified position of the current document.
If there is any selection in the document, it will be removed.

## Syntax

```javascript
expression.MoveCursorToPos(nPos);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | 0 | The desired cursor position. |

## Returns

boolean

## Example

Move cursor to a specified position inside the range object in a document.

```javascript editor-docx
// How can I move cursor to pos using a document in a document?

// Move cursor to pos for a document in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
paragraph = Api.CreateParagraph();
paragraph.AddText("The cursor was moved to the end of the document");
doc.Push(paragraph);
let range = doc.GetRange();
doc.MoveCursorToPos(range.GetEndPos());
```
