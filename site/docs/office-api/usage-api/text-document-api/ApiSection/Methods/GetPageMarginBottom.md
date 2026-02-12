# GetPageMarginBottom

Returns the bottom page margin for all pages in the current section.

## Syntax

```javascript
expression.GetPageMarginBottom();
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

This example specifies the page margins for all the pages in this section and returns it back.

```javascript editor-docx playground
// How to get bottom page margin.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetPageMargins(7200, 2880, 1440, 5760);
paragraph.AddText("This is a page with margins set. ");
paragraph.AddText("The left margin is 5 inches wide (" + section.GetPageMarginLeft() + " twentieths of a point). ");
paragraph.AddText("The top margin is 2 inches high (" + section.GetPageMarginTop() + " twentieths of a point). ");
paragraph.AddText("The right margin is 1 inch wide (" + section.GetPageMarginRight() + " twentieths of a point). ");
paragraph.AddText("The bottom margin is 4 inches high (" + section.GetPageMarginBottom() + " twentieths of a point). ");
```
