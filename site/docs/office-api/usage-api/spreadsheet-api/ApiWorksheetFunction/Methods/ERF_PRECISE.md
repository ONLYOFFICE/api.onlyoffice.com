# ERF_PRECISE

Returns the error function integrated between 0 and the specified lower limit.

## Syntax

```javascript
expression.ERF_PRECISE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The lower bound for integrating the error function. |

## Returns

number

## Example

Return the error function integrated between 0 and the specified lower limit in a spreadsheet.

```javascript editor-xlsx
// Get an error function from 0 to the lower limit.

// Calculate the integrated error function using ERF_PRECISE in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERF_PRECISE(0.745));
```
