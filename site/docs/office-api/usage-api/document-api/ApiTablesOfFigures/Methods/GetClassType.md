# GetClassType

Returns a type of the ApiTablesOfFigures class.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTablesOfFigures](../ApiTablesOfFigures.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tablesOfFigures"

## Example

Get the class type of the tables of figures collection.

```javascript editor-docx
// Obtain the tables of figures collection from the current document.

// Read the class type string that identifies the collection.

let doc = Api.GetDocument();
let tablesOfFigures = doc.GetTablesOfFigures();
let classType = tablesOfFigures.GetClassType();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Class type: " + classType);
doc.Push(resultParagraph);
```
