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

Move cursor to a specified position inside the range object in a document.

```javascript editor-docx
// How can I move cursor to pos using a cell range in a document?

// Move cursor to pos for a cell range in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This text for time field");
let range = paragraph.GetRange();
range.MoveCursorToPos(range.GetEndPos());
paragraph = Api.CreateParagraph();
paragraph.AddText("The cursor was moved to the end of range");
doc.Push(paragraph);
```
