# FreezeColumns

Freezes the first column or columns of the current worksheet.

## Syntax

```javascript
expression.FreezeColumns(count);
```

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | Optional | Number | 0 | Optional number of columns to freeze, or zero to unfreeze all columns. |

## Returns

This method doesn't return any data.

## Example

This example freezes the the first column.

```javascript editor-xlsx playground
// How to freeze columns using their indices.

// Get freeze panes and freeze a column using its index.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeColumns(1);
```
