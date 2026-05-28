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

Calculate the error function for a specified value in a spreadsheet.

```javascript editor-xlsx
// How do I compute the error function between limits in a spreadsheet?

// Evaluate the integral of the error function within a range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERF(-2));
```
