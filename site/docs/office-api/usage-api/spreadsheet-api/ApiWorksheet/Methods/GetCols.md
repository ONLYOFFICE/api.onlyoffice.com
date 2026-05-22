# GetCols

Returns the ApiRange object that represents all the cells on the columns range.

## Syntax

```javascript
expression.GetCols(sRange);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | Specifies the columns range in the string format. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Select all cells within a specified column range on a worksheet in a spreadsheet.

```javascript editor-xlsx
// How do I target every cell in a set of columns in a spreadsheet?

// Apply formatting to a group of columns by referencing all their cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let cols = worksheet.GetCols("A1:C1");
cols.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
