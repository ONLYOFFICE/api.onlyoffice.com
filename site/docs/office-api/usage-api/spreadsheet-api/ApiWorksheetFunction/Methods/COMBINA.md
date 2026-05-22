# COMBINA

Returns the number of combinations with repetitions for a given number of items.

## Syntax

```javascript
expression.COMBINA(arg1, arg2);
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

Count combinations when items can be repeated in a spreadsheet.

```javascript editor-xlsx
// How many selections can you make if you can reuse items in a spreadsheet?

// Find all possible selections including repeated items in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMBINA(7, 2));
```
