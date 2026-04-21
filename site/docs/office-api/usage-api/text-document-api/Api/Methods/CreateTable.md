# CreateTable

Creates a new table with a specified number of rows and columns.

## Syntax

```javascript
expression.CreateTable(cols, rows);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cols | Required | number |  | Number of columns. |
| rows | Required | number |  | Number of rows. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md)

## Example

Create a 3x3 table and insert it into the document.

```javascript editor-docx
// Create a table, add it to the document, and set its width to 100%.

// How to create the table object and add it to the document class.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.Push(table);
table.SetWidth("percent", 100);
```
