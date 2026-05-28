# Copy

Creates a copy of the specified table.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTable](../../ApiTable/ApiTable.md)

## Example

Duplicate a table and place the copy on another page in a PDF.

```javascript editor-pdf
// How do I make a copy of a table in a PDF?

// Create an exact duplicate of a table and add it to a new page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetPosition(608400, 1267200);
page.AddObject(table);

const copyTable = table.Copy();
const newPage = doc.AddPage(1);
newPage.AddObject(copyTable);
```
