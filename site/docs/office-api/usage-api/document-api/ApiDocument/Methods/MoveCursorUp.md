# MoveCursorUp

Moves the cursor up.

## Syntax

```javascript
expression.MoveCursorUp(count, addToSelect);
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

Move the cursor up by a given number of lines in a document.

```javascript editor-docx
// How do I shift the cursor upward through several lines in a document?

// Return to an earlier line after reaching the end to read content at that position in a document.

let doc = Api.GetDocument();
const paragraphCount = 5;
for (let i = 0; i < paragraphCount; i++) {
    const newParagraph = Api.CreateParagraph();
    newParagraph.AddText("This is " + (i + 1) + " paragraph.");
    doc.Push(newParagraph);
}

doc.MoveCursorToEnd();
doc.MoveCursorUp(3);

let paragraph = Api.CreateParagraph();
paragraph.AddText("Current line is: ");
paragraph.AddText(doc.GetCurrentSentence());
doc.Push(paragraph);
```
