# COMBIN

Returns the number of combinations for a given number of items.

## Syntax

```javascript
expression.COMBIN(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The total number of items, a numeric value greater than or equal to 0. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of items in each combination, a numeric value greater than or equal to 0 but less than the total number of items. |

## Returns

number

## Example

Count possible combinations from a set of items in a spreadsheet.

```javascript editor-xlsx
// How many different ways can you select items in a spreadsheet?

// Calculate the total number of unique selections you can make in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMBIN(67, 7));
```
