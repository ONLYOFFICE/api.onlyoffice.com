# GetParent

Returns the document that contains the table of figures.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiTableOfFigures](../ApiTableOfFigures.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocument](../../ApiDocument/ApiDocument.md) \| null

## Example

Get the document that contains a table of figures.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Return the parent document of the table of figures.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let parent = tof.GetParent();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Parent class type: " + parent.GetClassType());
doc.Push(resultParagraph);
```
