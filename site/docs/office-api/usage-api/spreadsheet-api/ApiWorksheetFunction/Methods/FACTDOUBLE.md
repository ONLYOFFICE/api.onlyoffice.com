# FACTDOUBLE

Returns the double factorial of a number.

## Syntax

```javascript
expression.FACTDOUBLE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for which to return the double factorial. |

## Returns

number

## Example

This example shows how to return the double factorial of a number.

```javascript editor-xlsx
// How to calculate a double factorial.

// Use function to calculate the double factorial of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.FACTDOUBLE(123));
```
