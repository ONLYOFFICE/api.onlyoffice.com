# GetUseHyperlinks

Returns whether entries are formatted as hyperlinks.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetUseHyperlinks();
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether the table of contents entries are formatted as hyperlinks.

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Read whether the entries link to their target headings.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
let isUseHyperlinks = toc.GetUseHyperlinks();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Entries use hyperlinks: " + isUseHyperlinks);
doc.Push(resultParagraph);
```
