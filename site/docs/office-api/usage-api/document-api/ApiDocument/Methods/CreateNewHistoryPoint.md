# CreateNewHistoryPoint

Creates a new history point.

## Syntax

```javascript
expression.CreateNewHistoryPoint();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Create a new history point to mark an undo boundary in a document.

```javascript editor-docx
// How do I create a history point between two edits in a document?

// Separate text changes into distinct undo steps so each can be reversed independently in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text.");
doc.CreateNewHistoryPoint();
paragraph = Api.CreateParagraph();
paragraph.AddText("New history point was just created.");
doc.Push(paragraph);
```
