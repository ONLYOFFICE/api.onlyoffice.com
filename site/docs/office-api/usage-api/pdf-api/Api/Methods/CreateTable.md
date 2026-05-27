# CreateTable

Creates a table.

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

Insert a table with multiple rows and columns in a PDF.

```javascript editor-pdf
// How do I add a table to a PDF page?

// Create and place a table with specific dimensions in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const table = Api.CreateTable(2, 4);
page.AddObject(table);
```
