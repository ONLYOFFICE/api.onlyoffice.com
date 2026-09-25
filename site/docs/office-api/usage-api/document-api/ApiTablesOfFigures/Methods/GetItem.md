# GetItem

Returns the table of figures at the specified position in the collection.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetItem(nIndex);
```

`expression` - A variable that represents a [ApiTablesOfFigures](../ApiTablesOfFigures.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | Required | number |  | The position (zero-based) of the table of figures. |

## Returns

[ApiTableOfFigures](../../ApiTableOfFigures/ApiTableOfFigures.md) \| null

## Example

Get a table of figures by its index from the document collection.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Retrieve the first table of figures from the collection by its zero-based index.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tablesOfFigures = doc.GetTablesOfFigures();
tablesOfFigures.Add({"BuildFrom": "Figure", "LabelNumber": true});
let tof = tablesOfFigures.GetItem(0);
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Item class type: " + tof.GetClassType());
doc.Push(resultParagraph);
```
