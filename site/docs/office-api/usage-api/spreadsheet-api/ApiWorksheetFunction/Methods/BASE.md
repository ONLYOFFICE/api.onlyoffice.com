# BASE

Converts a number into a text representation with the given radix (base).

## Syntax

```javascript
expression.BASE(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number to convert. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The base radix into which the number will be converted. An integer greater than or equal to 2 and less than or equal to 36. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The minimum length of the returned string. An integer greater than or equal to 0 and less than 256. If omitted, leading zeros are not added to the result. |

## Returns

number

## Example

This example shows how to convert a number into a text representation with the given radix (base).

```javascript editor-xlsx
// How to convert a number into text.

// Use function to get a text from a number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BASE(5, 2, 5));
```
