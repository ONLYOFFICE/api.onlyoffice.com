# GetPlaceholderText

Returns the placeholder text from the current inline content control.

## Syntax

```javascript
expression.GetPlaceholderText();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the placeholder text from the content control in a document.

```javascript editor-docx
// How to display the placeholder text of the inline text control in a document.

// Get the inline content control and show its placeholder text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.SetPlaceholderText("Enter your text here");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let placeholderText = inlineLvlSdt.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);
```
