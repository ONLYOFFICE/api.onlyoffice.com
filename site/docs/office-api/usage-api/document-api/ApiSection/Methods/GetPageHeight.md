# GetPageHeight

Gets page height for current section.

## Syntax

```javascript
expression.GetPageHeight();
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

Read the height of the pages defined by a section in a document.

```javascript editor-docx
// How do I find out the page height for a section in a document?

// Retrieve the vertical page size to verify or display layout dimensions in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
let height = section.GetPageHeight();
paragraph.AddText("Page height = " + height);
```
