# MoveCursorDown

Moves the cursor down.

## Syntax

```javascript
expression.MoveCursorDown(count, addToSelect);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | Optional | number | 1 | Number of movements. |
| addToSelect | Optional | boolean | false | Specifies whether to select text during the move. |

## Returns

boolean

## Example

Move the cursor down through the document in a document.

```javascript editor-docx
// How to move the cursor down by a specified number of lines in a document.

// Create multiple paragraphs and move cursor in a document.

let doc = Api.GetDocument();
const paragraphCount = 5;
for (let i = 0; i < paragraphCount; i++) {
    const newParagraph = Api.CreateParagraph();
    newParagraph.AddText("This is " + (i + 1) + " paragraph.");
    doc.Push(newParagraph);
}

doc.MoveCursorDown(3);

let paragraph = Api.CreateParagraph();
paragraph.AddText("Current line is: ");
paragraph.AddText(doc.GetCurrentSentence());
doc.Push(paragraph);
```
