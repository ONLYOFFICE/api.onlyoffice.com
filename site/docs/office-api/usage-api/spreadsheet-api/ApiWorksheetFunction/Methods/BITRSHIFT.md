# BITRSHIFT

Returns a number shifted right by the specified number of bits.

## Syntax

```javascript
expression.BITRSHIFT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The decimal representation of the binary number to evaluate. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of bits by which the number will be shifted right. |

## Returns

number

## Example

This example shows how to return a number shifted right by the specified number of bits.

```javascript editor-xlsx
// How to get a result from bits right shift.

// Use function to calculate bitwise right shift operation.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BITRSHIFT(13, 2));
```
