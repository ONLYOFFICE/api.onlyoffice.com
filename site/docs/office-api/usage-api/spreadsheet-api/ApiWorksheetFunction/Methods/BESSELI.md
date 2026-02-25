# BESSELI

Returns the modified Bessel function In(x).

## Syntax

```javascript
expression.BESSELI(arg1, arg2);
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

This example shows how to return the modified Bessel function In(x).

```javascript editor-xlsx playground
// How to get a resutl from Bessel function In(x).

// Use function to get the modified Bessel function In(x).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELI(3.5, 1));
```
