# GetPageWidth

Gets page width for current section.

## Syntax

```javascript
expression.GetPageWidth();
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

Read the width of the pages defined by a section in a document.

```javascript editor-docx
// How do I find out the page width for a section in a document?

// Retrieve the horizontal page size to verify or display layout dimensions in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
let width = section.GetPageWidth();
paragraph.AddText("Page width = " + width);
```
