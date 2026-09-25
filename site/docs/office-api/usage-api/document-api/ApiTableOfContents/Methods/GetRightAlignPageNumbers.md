# GetRightAlignPageNumbers

Returns whether page numbers are right-aligned in the table of contents.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetRightAlignPageNumbers();
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether page numbers are right-aligned in a table of contents.

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Read whether the page numbers are aligned to the right margin.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
let isRightAlign = toc.GetRightAlignPageNumbers();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Page numbers right-aligned: " + isRightAlign);
doc.Push(resultParagraph);
```
