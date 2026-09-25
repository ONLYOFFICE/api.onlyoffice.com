# GetIncludePageNumbers

Returns whether page numbers are shown in the table of contents.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetIncludePageNumbers();
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a table of contents shows page numbers.

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Read whether page numbers are included in the table of contents entries.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
let isInclude = toc.GetIncludePageNumbers();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Page numbers included: " + isInclude);
doc.Push(resultParagraph);
```
