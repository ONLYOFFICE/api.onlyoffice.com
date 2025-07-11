# COLUMNS

Returns the number of columns in the cell range.

## Syntax

```javascript
expression.COLUMNS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | A range or array of cells for which the number of columns will be returned. |

## Returns

number

## Example

This example shows how to return the number of columns in the cell range.

```javascript editor-xlsx
// How to find a number of columns from a range.

// Use function to count range column.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let column1 = [13, 14, 15];
let column2 = [23, 24, 25];

for (let i = 0; i < column1.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(column1[i]);
}
for (let j = 0; j < column2.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(column2[j]);
}

let range = worksheet.GetRange("A1:B3");
worksheet.GetRange("B4").SetValue(func.COLUMNS(range));
```
