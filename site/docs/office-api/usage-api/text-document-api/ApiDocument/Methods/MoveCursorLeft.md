# MoveCursorLeft

Moves a cursor to the left.

## Syntax

```javascript
expression.MoveCursorLeft(nCount, isShift, isCtl);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | number |  | The number of characters to move left. |
| isShift | Required | boolean |  | Specifies whether to select text during the move. |
| isCtl | Required | boolean |  | Specifies whether to move by word instead of by character. |

## Returns

boolean

## Example

This example shows how to move the cursor left in the document.

```javascript editor-docx
// How to move the cursor left by a specified number of characters.

// Add text, move cursor right, then move it left.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
doc.MoveCursorRight(6, true, true);
doc.MoveCursorLeft(2, false, false);
```
