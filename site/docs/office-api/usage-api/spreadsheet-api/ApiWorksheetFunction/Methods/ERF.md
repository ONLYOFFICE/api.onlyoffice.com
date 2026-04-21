# ERF

Returns the error function integrated between the specified lower and upper limits.

## Syntax

```javascript
expression.ERF(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The lower bound for integrating the error function. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The upper bound for integrating the error function. |

## Returns

number

## Example

Return the error function integrated between the specified lower and upper limits in a spreadsheet.

```javascript editor-xlsx
// How to get an error function in a spreadsheet.

// Use function to get an error function set between upper and lower limits in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERF(-2));
```
