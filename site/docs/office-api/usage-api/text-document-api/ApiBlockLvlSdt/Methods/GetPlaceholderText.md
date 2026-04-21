# GetPlaceholderText

Returns the placeholder text from the current content control.

## Syntax

```javascript
expression.GetPlaceholderText();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the placeholder text from the content control in a document.

```javascript editor-docx
// Create a block content control, set the placeholder text to it, and return this placeholder to insert it into the second paragraph of the document.

// How to get the placeholder text from the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Name");
let text = blockLvlSdt.GetPlaceholderText();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + text);
doc.Push(paragraph);
```
