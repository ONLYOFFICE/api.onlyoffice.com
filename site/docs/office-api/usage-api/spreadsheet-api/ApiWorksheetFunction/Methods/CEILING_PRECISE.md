# CEILING_PRECISE

Returns a number that is rounded up to the nearest integer or to the nearest multiple of significance. The number is always rounded up regardless of its sing.

## Syntax

```javascript
expression.CEILING_PRECISE(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to round up. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The multiple of significance to round up to. If it is omitted, the default value of 1 is used. If it is set to zero, the function returns 0. |

## Returns

number

## Example

Return a number that is rounded up to the nearest integer or to the nearest multiple of significance. The number is always rounded up regardless of its sing in a spreadsheet.

```javascript editor-xlsx
// How to round a number up precisely in a spreadsheet.

// Use function to round a negative or positive number up the nearest integer or to the nearest multiple of significance in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING_PRECISE(-6.7, 2));
```
