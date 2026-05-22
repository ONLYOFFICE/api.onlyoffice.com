# SHEET

Returns the sheet number of the reference sheet.

## Syntax

```javascript
expression.SHEET(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Optional | string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The name of a sheet or a reference for which the sheet number will be returned. If omitted the number of the sheet containing the function is returned. |

## Returns

number

## Example

Return the sheet number of the reference sheet in a spreadsheet.

```javascript editor-xlsx
// Retrieve the sheet number for a given sheet reference using the SHEET function.

// Apply the function to display the sheet index in a cell.

const worksheet = Api.GetActiveSheet(); 
let func = Api.WorksheetFunction;
let result = func.SHEET("Sheet1");
worksheet.GetRange("C3").SetValue(result);
```
