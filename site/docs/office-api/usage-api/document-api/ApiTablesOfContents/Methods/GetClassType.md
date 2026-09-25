# GetClassType

Returns a type of the ApiTablesOfContents class.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTablesOfContents](../ApiTablesOfContents.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tablesOfContents"

## Example

Get the class type of the tables of contents collection.

```javascript editor-docx
// Obtain the tables of contents collection from the current document.

// Read the class type string that identifies the collection.

let doc = Api.GetDocument();
let tablesOfContents = doc.GetTablesOfContents();
let classType = tablesOfContents.GetClassType();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Class type: " + classType);
doc.Push(resultParagraph);
```
