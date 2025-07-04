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

This example shows how to get the page width.

```javascript editor-docx
// How to get the page width.

// Get the final section of the page and get its width.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
let width = section.GetPageWidth();
paragraph.AddText("Page width = " + width);
```
