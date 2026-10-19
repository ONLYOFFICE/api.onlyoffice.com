# GetRange

Returns a range that covers the entire table of figures.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetRange();
```

`expression` - A variable that represents an [ApiTableOfFigures](../ApiTableOfFigures.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Get a range that covers an entire table of figures.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Obtain the range spanning the whole table of figures.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let range = tof.GetRange();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Range class type: " + range.GetClassType());
doc.Push(resultParagraph);
```
