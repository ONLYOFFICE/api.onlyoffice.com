# GetDisplayedText

Returns the hyperlink display text.

## Syntax

```javascript
expression.GetDisplayedText();
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the hyperlink display text in a document.

```javascript editor-docx
// How to show the display text of the hyperlink in the document.

// Add a hyperlink to the paragraph and get its visible text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let displayedText = hyperlink.GetDisplayedText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Displayed text: " + displayedText);
doc.Push(paragraph);
```
