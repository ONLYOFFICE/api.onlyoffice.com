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

Return the unit matrix for the specified dimension in a spreadsheet.

```javascript editor-xlsx
// How to get an unit matrix in a spreadsheet.

// Use a function to get an unit matrix specifying dimension in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MUNIT(3));
```
