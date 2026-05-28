# SUMSQ

Returns the sum of the squares of the arguments.

## Syntax

```javascript
expression.SUMSQ(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean \| (number \| string \| boolean)[] |  | Up to 255 numeric values for which the sum of the squares will be calculated. The first argument is required, subsequent arguments are optional. The arguments can be numbers, names, logical values or text representations of numbers, ranges of cells that contain numbers, or arrays. |

## Returns

number

## Example

Return the sum of the squares of the arguments in a spreadsheet.

```javascript editor-xlsx
// Calculate the sum of squared values using the SUMSQ function.

// Returns the total of all squared arguments.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUMSQ(1, 0, 0, 0, 4, 1, 0, 0, 2, 3, 6, 7, 6, 8, 10, 12));
```
