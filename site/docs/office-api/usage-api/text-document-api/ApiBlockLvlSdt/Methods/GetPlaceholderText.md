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

This example shows how to get the placeholder text from the content control.

```javascript editor-docx playground
// Creates a block content control, sets the placeholder text to it, and returns this placeholder to insert it into the second paragraph of the document.

// How to get the placeholder text from the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Name");
let text = blockLvlSdt.GetPlaceholderText();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + text);
doc.Push(paragraph);
```
