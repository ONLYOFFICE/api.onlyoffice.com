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

This example creates a 3x3 table and inserts it into the document.

```javascript editor-docx
// Creates a table, adds it to the document, and sets its width to 100%.

// How to create the ApiTable object and add it to the ApiDocument class.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.Push(table);
table.SetWidth("percent", 100);
```
