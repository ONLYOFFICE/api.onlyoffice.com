# Add

Adds a table of contents to the document and returns it.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Add(oTocPr, oRange);
```

`expression` - A variable that represents a [ApiTablesOfContents](../ApiTablesOfContents.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTocPr | Optional | [TocPr](../../Enumeration/TocPr.md) | \{\} | Table of contents properties. |
| oRange | Optional | [ApiRange](../../ApiRange/ApiRange.md) |  | The range that the table of contents replaces. If omitted, the table of contents is inserted at the current position. |

## Returns

[ApiTableOfContents](../../ApiTableOfContents/ApiTableOfContents.md) \| null

## Example

Insert a new table of contents that replaces a specified range in the document.

```javascript editor-docx
// Build the heading outline, then place an anchor paragraph where the table of contents should appear.

// Add the table of contents to the collection, replacing the anchor range, and return it.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let anchor = Api.CreateParagraph();
anchor.AddText("Table of contents goes here");
doc.Push(anchor);
let tablesOfContents = doc.GetTablesOfContents();
let range = anchor.GetRange();
let toc = tablesOfContents.Add({"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvlStart": 1, "OutlineLvls": 9}, "TocStyle": "standard"}, range);
```
