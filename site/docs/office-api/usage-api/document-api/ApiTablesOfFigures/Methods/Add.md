# Add

Adds a table of figures to the document and returns it.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Add(oTofPr, oRange);
```

`expression` - A variable that represents a [ApiTablesOfFigures](../ApiTablesOfFigures.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTofPr | Optional | [TofPr](../../Enumeration/TofPr.md) | \{\} | Table of figures properties. |
| oRange | Optional | [ApiRange](../../ApiRange/ApiRange.md) |  | The range that the table of figures replaces. If omitted, the table of figures is inserted at the current position. |

## Returns

[ApiTableOfFigures](../../ApiTableOfFigures/ApiTableOfFigures.md) \| null

## Example

Insert a new table of figures that replaces a specified range in the document.

```javascript editor-docx
// Add a captioned figure, then place an anchor paragraph where the table of figures should appear.

// Add the table of figures to the collection, replacing the anchor range, and return it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let anchor = Api.CreateParagraph();
anchor.AddText("Table of figures goes here");
doc.Push(anchor);
let tablesOfFigures = doc.GetTablesOfFigures();
let range = anchor.GetRange();
let tof = tablesOfFigures.Add({"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"}, range);
```
