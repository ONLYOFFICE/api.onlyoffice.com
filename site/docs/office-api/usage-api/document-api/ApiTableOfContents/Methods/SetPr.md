# SetPr

Applies the specified properties to the table of contents and rebuilds it.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetPr(oTocPr);
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTocPr | Required | [TocPr](../../Enumeration/TocPr.md) |  | Table of contents properties. |

## Returns

boolean

## Example

Apply table of contents properties to an existing table of contents.

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Update the page numbers, leader, outline range, and style of the table of contents at once.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetPr({"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dash", "FormatAsLinks": true, "BuildFrom": {"OutlineLvlStart": 1, "OutlineLvls": 3}, "TocStyle": "modern"});
```
