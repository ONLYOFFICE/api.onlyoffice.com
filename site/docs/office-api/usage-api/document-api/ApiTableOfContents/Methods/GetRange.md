# GetRange

Returns a range that covers the entire table of contents.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetRange();
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Get a range that covers an entire table of contents.

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Obtain the range spanning the whole table of contents.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
let range = toc.GetRange();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Range class type: " + range.GetClassType());
doc.Push(resultParagraph);
```
