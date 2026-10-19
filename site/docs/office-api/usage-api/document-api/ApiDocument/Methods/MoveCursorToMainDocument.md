# MoveCursorToMainDocument

Moves the cursor from the header, footer or any other special part of the document back to the main document content on the current page.

## Syntax

```javascript
expression.MoveCursorToMainDocument();
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Return the cursor from the header or footer back to the main document content.

```javascript editor-docx
// Leave the header/footer editing mode after adding text so the next input goes to the document body.

// Enter text into the main document again once the cursor has left the footer.

const doc = Api.GetDocument();
doc.MoveCursorToFooter();
doc.EnterText('Text in the page footer.');

doc.MoveCursorToMainDocument();
doc.EnterText('Text in the main document.');
```
