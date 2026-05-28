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

boolean

## Example

Combine a group of cells into one single cell in a spreadsheet.

```javascript editor-xlsx
// How do I merge multiple cells together into one in a spreadsheet?

// Join adjacent cells across rows or columns into a unified block in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3:E8").Merge(true);
worksheet.GetRange("A9:E14").Merge(false);
```
