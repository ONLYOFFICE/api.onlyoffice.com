# CreateTable

Creates a new table with a specified number of rows and columns.

:::danger[Breaking Change]
Starting from version 9.4.0, the parameter order has been changed from `Api.CreateTable(cols, rows)` to `Api.CreateTable(rows, cols)`.
:::

## Syntax

```javascript
expression.CreateTable(rows, cols);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rows | Required | number |  | Number of rows. |
| cols | Required | number |  | Number of columns. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md)

## Example

Insert a 3x3 table spanning the full page width in a document.

```javascript editor-docx
// How do I add a table to a document?

// Build a new table and stretch it to fill the entire line width in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.Push(table);
table.SetWidth("percent", 100);
```
