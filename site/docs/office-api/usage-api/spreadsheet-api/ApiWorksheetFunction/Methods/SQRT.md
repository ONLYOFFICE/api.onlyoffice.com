# SQRT

Returns the square root of a number.

## Syntax

```javascript
expression.SQRT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number for which the square root will be returned. |

## Returns

number

## Example

Calculate the square root of a number.

```javascript editor-xlsx
// The SQRT function returns the positive square root of a numeric value.

// Get the square root of 100 and place it in cell A1.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRT(100));
```
