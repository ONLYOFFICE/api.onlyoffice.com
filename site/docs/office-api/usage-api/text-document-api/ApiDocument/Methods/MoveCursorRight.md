# MoveCursorRight

Moves a cursor to the right.

## Syntax

```javascript
expression.MoveCursorRight(nCount, isShift, isCtl);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | number |  | The number of characters to move right. |
| isShift | Required | boolean |  | Specifies whether to select text during the move. |
| isCtl | Required | boolean |  | Specifies whether to move by word instead of by character. |

## Returns

boolean

## Example

This example shows how to move the cursor right in the document.

```javascript editor-docx
// How to move the cursor right by a specified number of characters.

// Add text and move cursor right with selection.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
doc.MoveCursorRight(6, true, true);
doc.MoveCursorLeft(2, false, false);
```
