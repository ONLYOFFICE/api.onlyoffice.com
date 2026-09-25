# GetCaption

Returns the caption label that the table of figures is built from (for example, "Figure").

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetCaption();
```

`expression` - A variable that represents a [ApiTableOfFigures](../ApiTableOfFigures.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

Get the caption label that a table of figures is built from.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Read the caption label that the table of figures collects its entries by.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let caption = tof.GetCaption();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Caption label: " + caption);
doc.Push(resultParagraph);
```
