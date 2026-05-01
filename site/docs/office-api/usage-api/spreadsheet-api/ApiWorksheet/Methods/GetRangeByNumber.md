# GetRangeByNumber

Returns an object that represents the selected range of the current sheet using the -**row/column** coordinates for the cell selection.

## Syntax

```javascript
expression.GetRangeByNumber(nRow, nCol);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | Required | number |  | The row number. |
| nCol | Required | number |  | The column number. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Get an object that represents the selected range of the sheet using the row/column coordinates for the cell selection in a spreadsheet.

```javascript editor-xlsx
// How to get a range using its coordinates in a spreadsheet.

// Get range by number and set its value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRangeByNumber(1, 2).SetValue("42");
```
