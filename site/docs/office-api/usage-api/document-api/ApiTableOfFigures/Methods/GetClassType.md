# GetClassType

Returns a type of the ApiTableOfFigures class.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTableOfFigures](../ApiTableOfFigures.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableofcontents"

## Example

Get the class type of a table of figures object.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Read the class type string that identifies the table of figures.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
let classType = tof.GetClassType();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Class type: " + classType);
doc.Push(resultParagraph);
```
