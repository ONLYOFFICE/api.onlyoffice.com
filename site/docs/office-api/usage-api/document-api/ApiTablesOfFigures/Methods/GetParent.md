# GetParent

Returns the document that owns this collection.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiTablesOfFigures](../ApiTablesOfFigures.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocument](../../ApiDocument/ApiDocument.md)

## Example

Get the document that owns the tables of figures collection.

```javascript editor-docx
// Obtain the tables of figures collection from the current document.

// Return the parent document that the collection belongs to.

let doc = Api.GetDocument();
let tablesOfFigures = doc.GetTablesOfFigures();
let parent = tablesOfFigures.GetParent();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Parent class type: " + parent.GetClassType());
doc.Push(resultParagraph);
```
