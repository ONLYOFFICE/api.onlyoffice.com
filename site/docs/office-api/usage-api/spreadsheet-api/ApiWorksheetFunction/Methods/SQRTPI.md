# SQRTPI

Returns the square root of (number * pi).

## Syntax

```javascript
expression.SQRTPI(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number by which pi is multiplied. |

## Returns

number

## Example

This example shows how to return the square root of (number * pi).

```javascript editor-xlsx playground
// How to calculate the square root of a number multiplied by aa constant Pi.

// Use a function to get the square root of (number * pi).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRTPI(5));
```
