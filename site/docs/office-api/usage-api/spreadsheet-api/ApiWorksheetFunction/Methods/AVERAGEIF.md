# AVERAGEIF

Finds the average (arithmetic mean) for the cells specified by a given condition or criteria.

## Syntax

```javascript
expression.AVERAGEIF(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The range of cells which will be evaluated. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | The condition or criteria in the form of a number, expression, or text that defines which cells will be used to find the average. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The actual cells to be used to find the average. If omitted, the cells in the range are used. |

## Returns

number

## Example

This example shows how to find the average (arithmetic mean) for the cells specified by a given condition or criteria.

```javascript editor-xlsx
// How to find an average (arithmetic mean) using condition.

// Use function to get an average of the cells if the condition is met.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let numbers = [67, 87, 98, 45];

for (let i = 0; i < numbers.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(numbers[i]);
}

let range = worksheet.GetRange("A1:A4");
worksheet.GetRange("C1").SetValue(func.AVERAGEIF(range, ">45"));
```
