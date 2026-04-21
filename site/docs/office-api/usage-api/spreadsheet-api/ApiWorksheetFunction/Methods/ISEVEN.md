# ISEVEN

Returns -**true** if a number is even.

## Syntax

```javascript
expression.ISEVEN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to test. |

## Returns

boolean

## Example

Return true if a number is even in a spreadsheet.

```javascript editor-xlsx
// How to check if the number is even in a spreadsheet.

// Use a function to check whether a number is even or not in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.ISEVEN("66");
worksheet.GetRange("C3").SetValue(result)
```
