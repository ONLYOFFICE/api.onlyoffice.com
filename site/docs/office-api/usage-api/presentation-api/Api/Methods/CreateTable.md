# CreateTable

Creates a table.
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
| rows | Required |  |  | Number of rows. |
| cols | Required |  |  | Number of columns. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md)

## Example

Add a table with multiple rows and columns to a presentation.

```javascript editor-pptx
// How do I insert a table with specific dimensions in a presentation?

// Create a table with 2 rows and 4 columns and place it on a slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 4);
slide.RemoveAllObjects();
slide.AddObject(table);
```
