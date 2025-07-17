# BESSELJ

Returns the Bessel function Jn(x).

## Syntax

```javascript
expression.BESSELJ(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value at which to evaluate the function. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The order of the Bessel function. |

## Returns

number

## Example

This example shows how to return the Bessel function Jn(x).

```javascript editor-xlsx
// How to get a result from Bessel function Jn(x).

// Use function to get the Bessel function Jn(x).

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BESSELJ(1.9, 2));
```
