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

Calculate the square root of (number * pi).

```javascript editor-xlsx
// The SQRTPI function returns the square root of the product of a number and pi (3.14159...).

// Get the square root of (5 * pi) and place it in cell A1.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRTPI(5));
```
