# FISHERINV

Returns the inverse of the Fisher transformation: if y = FISHER(x), then FISHERINV(y) = x.

## Syntax

```javascript
expression.FISHERINV(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to perform the inverse of the transformation. |

## Returns

number

## Example

Reverse a Fisher transformation to get a correlation value in a spreadsheet.

```javascript editor-xlsx
// How do I convert a Fisher transformation back to a correlation in a spreadsheet?

// Extract the original correlation value from its Fisher transformation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FISHERINV(0.56);
worksheet.GetRange("B2").SetValue(ans);
```
