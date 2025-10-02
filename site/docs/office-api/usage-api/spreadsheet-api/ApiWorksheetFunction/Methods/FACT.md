# FACT

Returns the factorial of a number, which is equal to *1*2*3*...** number.

## Syntax

```javascript
expression.FACT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The nonnegative number for which the factorial will be calculated. |

## Returns

number

## Example

This example shows how to return the factorial of a number, which is equal to 123 *...* number.

```javascript editor-xlsx
// How to calculate a number factorial.

// Use function to calculate the factorial of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.FACT(123));
```
