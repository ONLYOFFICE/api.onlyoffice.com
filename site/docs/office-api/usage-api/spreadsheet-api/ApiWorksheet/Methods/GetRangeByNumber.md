# GetRangeByNumber

Returns an object that represents the selected range of the current sheet using the - **row/column** coordinates for the cell selection.

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

Locate a cell using row and column numbers instead of letters in a spreadsheet.

```javascript editor-xlsx
// Pick cells by their numeric positions without using address notation in a spreadsheet?

// Enter data into a cell when you know only its row and column count in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRangeByNumber(1, 2).SetValue("42");
```
