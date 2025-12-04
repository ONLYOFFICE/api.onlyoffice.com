# MoveCursorUp

Moves a cursor up.

## Syntax

```javascript
expression.MoveCursorUp(nCount, isShift, isCtl);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | number |  | The number of lines to move up. |
| isShift | Required | boolean |  | Specifies whether to select text during the move. |
| isCtl | Required | boolean |  | Specifies whether to move by paragraph instead of by line. |

## Returns

boolean

## Example

This example shows how to move the cursor up through the document.

```javascript editor-docx
// How to move the cursor up by a specified number of paragraphs.

// Create multiple paragraphs, move cursor down, then move it up with selection.
let doc = Api.GetDocument();
const paragraphCount = 5;
for (let i = 1; i < paragraphCount; i++) {
    const newParagraph = Api.CreateParagraph();
    newParagraph.AddText("This is " + (i + 1) + " paragraph.");
    doc.Push(newParagraph);
}

doc.ForceRecalculate();
doc.MoveCursorDown(3, false, false);
doc.MoveCursorUp(1, true, true);
```
