# RAND

Returns a random number greater than or equal to 0 and less than 1, evenly distributed (changes on recalculation).

## Syntax

```javascript
expression.RAND();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Generate a random number between 0 and 1 in a spreadsheet.

```javascript editor-xlsx
// How do I create a random decimal value in a spreadsheet?

// Insert an unpredictable number that recalculates each time the spreadsheet updates in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RAND());
```
