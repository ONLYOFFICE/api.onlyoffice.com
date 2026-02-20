# ODD

Rounds a positive number up and negative number down to the nearest odd integer.

## Syntax

```javascript
expression.ODD(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to round. |

## Returns

number

## Example

This example shows how to round a positive number up and negative number down to the nearest odd integer.

```javascript editor-xlsx playground
// How to round a number the nearest odd integer.

// Use a function round a negative/positive number the nearest odd integer.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ODD(7.675));
```
