# MoveCursorRight

Moves the cursor to the right.

## Syntax

```javascript
expression.MoveCursorRight(count, addToSelect, byWords);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | Optional | number | 1 | Number of movements. |
| addToSelect | Optional | boolean | false | Specifies whether to select text during the move. |
| byWords | Optional | boolean | false | Specifies whether to move by words instead of by character. |

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
doc.MoveCursorRight(12);

paragraph = Api.CreateParagraph();
paragraph.AddText(doc.GetCurrentWord());
doc.Push(paragraph);
```
