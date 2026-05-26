# PERMUT

Returns the number of permutations for a given number of objects that can be selected from the total objects.

## Syntax

```javascript
expression.PERMUT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The total number of objects. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of objects in each permutation. |

## Returns

number

## Example

Calculate how many ways you can arrange a selection of objects in a spreadsheet.

```javascript editor-xlsx
// How do I find the number of arrangements for selected items in a spreadsheet?

// Determine the count of unique permutations from a pool of distinct objects in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PERMUT(32, 2));
```
