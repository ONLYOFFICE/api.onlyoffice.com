# MoveCursorLeft

Moves the cursor to the left.

## Syntax

```javascript
expression.MoveCursorLeft(count, addToSelect, byWords);
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

This example shows how to move the cursor left in the document.

```javascript editor-docx playground
// How to move the cursor left by a specified number of characters.

// Add text, move cursor right, then move it left.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
doc.MoveCursorToEnd();
doc.MoveCursorLeft(11);

paragraph = Api.CreateParagraph();
paragraph.AddText(doc.GetCurrentWord());
doc.Push(paragraph);
```
