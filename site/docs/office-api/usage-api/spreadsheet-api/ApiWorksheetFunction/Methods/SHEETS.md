# SHEETS

Returns the number of sheets in a reference.

## Syntax

```javascript
expression.SHEETS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | A reference for which the number of sheets will be returned. If omitted the number of sheets in the workbook containing the function is returned. |

## Returns

number

## Example

Return the number of sheets in a reference in a spreadsheet.

```javascript editor-xlsx
// Count all sheets in the current workbook using the SHEETS function.

// Add additional sheets and retrieve their total count in a cell.

Api.AddSheet("Sheet2")
Api.AddSheet("Sheet3")

// Get the number of sheets
let func = Api.WorksheetFunction;
let result = func.SHEETS();
const worksheet = Api.GetActiveSheet();
worksheet.GetRange("C3").SetValue(result);
```
