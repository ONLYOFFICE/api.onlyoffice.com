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

Move the cursor right by a specified number of characters in a document.

```javascript editor-docx
// How do I advance the cursor forward through text in a document?

// Skip past a known number of characters to land on a specific word for reading in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
doc.MoveCursorRight(12);

paragraph = Api.CreateParagraph();
paragraph.AddText(doc.GetCurrentWord());
doc.Push(paragraph);
```
