# MoveCursorToPos

Moves a cursor to a specified position of the current range object.
If there is any selection in the document, it will be removed.

## Syntax

```javascript
expression.MoveCursorToPos(nPos);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | 0 | The desired cursor position. |

## Returns

boolean

## Example

Move the cursor to a specific position within a text range in a document.

```javascript editor-docx
// How do I place the cursor at a chosen location inside a range in a document?

// Reposition the cursor to reach a particular spot within selected text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This text for time field");
let range = paragraph.GetRange();
range.MoveCursorToPos(range.GetEndPos());
paragraph = Api.CreateParagraph();
paragraph.AddText("The cursor was moved to the end of range");
doc.Push(paragraph);
```
