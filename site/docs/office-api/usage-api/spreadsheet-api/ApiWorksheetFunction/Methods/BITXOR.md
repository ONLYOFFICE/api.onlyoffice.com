# BITXOR

Returns a bitwise "XOR" (Exclusive Or) of two numbers.

## Syntax

```javascript
expression.BITXOR(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The first decimal representation of the binary number to evaluate. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The second decimal representation of the binary number to evaluate. |

## Returns

number

## Example

This example shows how to return a bitwise "XOR" of two numbers.

```javascript editor-xlsx
// How to get a result from XOR operation.

// Use function to calculate bitwise "XOR" operation.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BITXOR(5, 3));
```
