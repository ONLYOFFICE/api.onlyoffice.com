# MoveCursorToStart

Moves a cursor to the start of the document.

## Syntax

```javascript
expression.MoveCursorToStart();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Move the cursor to the start of the document in a document.

```javascript editor-docx
// How can I move cursor to start using a document in a document?

// Move cursor to start for a document in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph.');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph.');
doc.Push(paragraph2);

doc.MoveCursorToStart();
doc.EnterText('Cursor was moved to the beginning. ');
```
