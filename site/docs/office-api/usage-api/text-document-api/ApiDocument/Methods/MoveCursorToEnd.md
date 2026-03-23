# MoveCursorToEnd

Moves a cursor to the end of the document.

## Syntax

```javascript
expression.MoveCursorToEnd();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to move the cursor to the end of the document.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph.');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph.');
doc.Push(paragraph2);

doc.MoveCursorToEnd();
doc.EnterText(' Cursor was moved to the end.');

```
