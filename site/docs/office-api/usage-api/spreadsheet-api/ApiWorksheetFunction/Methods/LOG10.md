# LOG10

Returns the base-10 logarithm of a number.

## Syntax

```javascript
expression.LOG10(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The positive real number for which the base-10 logarithm will be returned. |

## Returns

number

## Example

This example shows how to return the base-10 logarithm of a number.

```javascript editor-xlsx
// How to get the logarithm to the base 10.

// Use a function to return the logarithm with the base-10.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.LOG10(56));
```
