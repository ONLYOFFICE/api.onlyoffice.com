# UnMerge

Splits the selected merged cell range into the single cells.

## Syntax

```javascript
expression.UnMerge();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Split a previously merged cell range back into individual cells in a spreadsheet.

```javascript editor-xlsx
// How do I separate merged cells into single cells in a spreadsheet?

// Undo a cell merge so each address in the range becomes its own independent cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3:E8").Merge(true);
worksheet.GetRange("A5:E5").UnMerge();
```
