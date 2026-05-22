# PERMUTATIONA

Returns the number of permutations for a given number of objects (with repetitions) that can be selected from the total objects.

## Syntax

```javascript
expression.PERMUTATIONA(arg1, arg2);
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

Calculate the number of ways to arrange items when repetition is allowed in a spreadsheet.

```javascript editor-xlsx
// How do I find the count of arrangements when objects can be reused in a spreadsheet?

// Determine permutations where items can appear more than once in the selection in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//method params
let number = 32;
let number_chosen = 2;

worksheet.GetRange("A1").SetValue(number);
worksheet.GetRange("B1").SetValue(number_chosen);

let func = Api.WorksheetFunction;
let ans = func.PERMUTATIONA(number, number_chosen);

worksheet.GetRange("C1").SetValue(ans);
```
