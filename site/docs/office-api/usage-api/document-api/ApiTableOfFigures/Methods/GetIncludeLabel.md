# GetIncludeLabel

Returns whether the caption label and number are included in the table of figures entries.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetIncludeLabel();
```

`expression` - A variable that represents a [ApiTableOfFigures](../ApiTableOfFigures.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a table of figures includes the caption label and number.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Read whether the caption label and number are shown in the table of figures entries.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let isIncludeLabel = tof.GetIncludeLabel();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Caption label included: " + isIncludeLabel);
doc.Push(resultParagraph);
```
