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

Split the current paragraph into two at the cursor position in a document.

```javascript editor-docx
// How do I insert a paragraph break at a chosen location in a document?

// Divide existing text into separate paragraphs without manually retyping any content.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph.");
doc.MoveCursorRight(6, false, true);
doc.InsertParagraphBreak();
doc.EnterText("This is the second paragraph.");
```
