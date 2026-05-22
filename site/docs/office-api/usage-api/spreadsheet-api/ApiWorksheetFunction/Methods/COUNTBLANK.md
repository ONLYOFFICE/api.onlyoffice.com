# COUNTBLANK

Counts a number of empty cells in a specified range of cells.

## Syntax

```javascript
expression.COUNTBLANK(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The range to count the empty cells. |

## Returns

number

## Example

Count the empty cells in a range in a spreadsheet.

```javascript editor-xlsx
// What is the number of blank spaces in a selected area in a spreadsheet?

// Identify unused cells to track unfilled entries in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let numbersArr = [45, 6, 8];
let stringsArr = ["Apples", "ranges", "Bananas"]

// Place the numbers in cells
for (let i = 0; i < numbersArr.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

// Place the strings in cells
for (let n = 0; n < stringsArr.length; n++) {
    worksheet.GetRange("B" + (n + 1)).SetValue(stringsArr[n]);
}

let func = Api.WorksheetFunction;
let ans = func.COUNTBLANK(worksheet.GetRange("A1:C3"));
worksheet.GetRange("D3").SetValue(ans);
```
