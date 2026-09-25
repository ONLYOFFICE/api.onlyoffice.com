# GetCount

Returns the number of tables of figures in the document.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetCount();
```

`expression` - A variable that represents a [ApiTablesOfFigures](../ApiTablesOfFigures.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Count how many tables of figures the document contains.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Read the number of tables of figures currently present in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tablesOfFigures = doc.GetTablesOfFigures();
tablesOfFigures.Add({"BuildFrom": "Figure", "LabelNumber": true});
let count = tablesOfFigures.GetCount();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Tables of figures count: " + count);
doc.Push(resultParagraph);
```
