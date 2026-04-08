# CreateTable

Creates a table.

## Syntax

```javascript
expression.CreateTable(nCols, nRows);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCols | Required |  |  | Number of columns. |
| nRows | Required |  |  | Number of rows. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md)

## Example

How to create new table with two rows and four columns.

```javascript editor-pdf
// Add a table to the pdf document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const table = Api.CreateTable(2, 4);
page.AddObject(table);
```
