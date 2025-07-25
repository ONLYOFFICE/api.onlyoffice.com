# INT

Rounds a number down to the nearest integer.

## Syntax

```javascript
expression.INT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The real number to round down to an integer. |

## Returns

number

## Example

This example shows how to round a number down to the nearest integer.

```javascript editor-xlsx
// How to round a number down to the nearest integer.

// Use a function to round down a number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.INT(2.3));
```
