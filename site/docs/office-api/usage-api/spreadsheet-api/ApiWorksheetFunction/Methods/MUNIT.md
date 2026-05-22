# MUNIT

Returns the unit matrix for the specified dimension.

## Syntax

```javascript
expression.MUNIT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An integer specifying the dimension of the unit matrix to be returned. |

## Returns

number

## Example

Generate a unit matrix for a specific size in a spreadsheet.

```javascript editor-xlsx
// Create a unit matrix and place it in a cell in a spreadsheet.

// Insert a matrix of ones and zeros into your spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MUNIT(3));
```
