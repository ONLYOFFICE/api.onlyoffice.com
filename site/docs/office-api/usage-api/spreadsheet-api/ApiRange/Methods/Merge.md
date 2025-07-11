# Merge

Merges the selected cell range into a single cell or a cell row.

## Syntax

```javascript
expression.Merge(isAcross);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAcross | Required | boolean |  | When set to **true**, the cells within the selected range will be merged along the rows, but remain split in the columns. When set to **false**, the whole selected range of cells will be merged into a single cell. |

## Returns

This method doesn't return any data.

## Example

This example merges the selected cell range into a single cell or a cell row.

```javascript editor-xlsx
// How to get a range using cell addresses and merge them into one.

// Get a range, merge its cells into one cell.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3:E8").Merge(true);
worksheet.GetRange("A9:E14").Merge(false);
```
