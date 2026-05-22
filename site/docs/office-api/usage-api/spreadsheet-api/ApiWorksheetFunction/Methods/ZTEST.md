# ZTEST

Returns the one-tailed P-value of a z-test.

## Syntax

```javascript
expression.ZTEST(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The array or range of data against which to test X. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to test. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The population (known) standard deviation. If omitted, the sample standard deviation is used. |

## Returns

number

## Example

Perform a z-test and return the one-tailed probability value in a spreadsheet.

```javascript editor-xlsx
// How do I run a one-tailed z-test for statistical hypothesis testing in a spreadsheet?

// Calculate the statistical significance score for a one-tailed z-test in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let argumentsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// Place the numbers in cells
for (let i = 0; i < argumentsArr.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(argumentsArr[i]);
}

// Get values from the range
let data = worksheet.GetRange("A1:A16");

// Calculate the TRIMMEAN of the range A1:A16
let func = Api.WorksheetFunction;
let result = func.ZTEST(data, 0.4);
worksheet.GetRange("B1").SetValue(result);
```
