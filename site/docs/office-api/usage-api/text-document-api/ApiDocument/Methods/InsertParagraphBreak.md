# InsertParagraphBreak

Add paragraph to the document on the cursor position.

## Syntax

```javascript
expression.InsertParagraphBreak();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to enter a paragraph at the current cursor position.

```javascript editor-docx
// How to add a paragraph at the cursor position.

// Add text and create a new paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph.");
doc.MoveCursorRight(6, false, true);
doc.InsertParagraphBreak();
doc.EnterText("This is the second paragraph.");
```
