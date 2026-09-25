# SetPr

Applies the specified properties to the table of figures and rebuilds it.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetPr(oTofPr);
```

`expression` - A variable that represents a [ApiTableOfFigures](../ApiTableOfFigures.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTofPr | Required | [TofPr](../../Enumeration/TofPr.md) |  | Table of figures properties. |

## Returns

boolean

## Example

Apply table of figures properties to an existing table of figures.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Update the page numbers, leader, caption label, and style of the table of figures at once.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetPr({"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dash", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": false, "TofStyle": "classic"});
```
