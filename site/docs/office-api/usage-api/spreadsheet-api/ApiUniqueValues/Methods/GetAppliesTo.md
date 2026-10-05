# GetAppliesTo

Returns the range of cells to which the current conditional formatting rule applies.

Inherited from [ApiFormatCondition.GetAppliesTo](../../ApiFormatCondition/Methods/GetAppliesTo.md).

## Syntax

```javascript
expression.GetAppliesTo();
```

`expression` - A variable that represents an [ApiUniqueValues](../ApiUniqueValues.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Find the cell range covered by a unique-values conditional formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I check which cells a unique-values highlighting rule is applied to in a spreadsheet?

// Confirm the exact address of the range a unique-values rule targets in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

// Get the range to which this formatting rule applies
let appliedRange = uniqueValuesCondition.GetAppliesTo();

worksheet.GetRange("C1").SetValue("Applied Range Address:");
worksheet.GetRange("C2").SetValue(appliedRange.GetAddress());
```
