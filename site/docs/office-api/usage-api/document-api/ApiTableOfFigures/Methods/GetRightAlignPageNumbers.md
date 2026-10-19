# GetRightAlignPageNumbers

Returns whether page numbers are right-aligned in the table of figures.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetRightAlignPageNumbers();
```

`expression` - A variable that represents an [ApiTableOfFigures](../ApiTableOfFigures.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether page numbers are right-aligned in a table of figures.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Read whether the page numbers are aligned to the right margin.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let isRightAlign = tof.GetRightAlignPageNumbers();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Page numbers right-aligned: " + isRightAlign);
doc.Push(resultParagraph);
```
