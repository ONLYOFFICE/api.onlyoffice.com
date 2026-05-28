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

Read the visible label of a hyperlink in a document.

```javascript editor-docx
// How do I get the text that is shown for a hyperlink in a document?

// Confirm what words a reader sees when a hyperlink is rendered in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let displayedText = hyperlink.GetDisplayedText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Displayed text: " + displayedText);
doc.Push(paragraph);
```
