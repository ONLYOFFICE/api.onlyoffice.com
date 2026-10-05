# GetParent

Returns the parent range object of the current format condition.

Inherited from [ApiFormatCondition.GetParent](../../ApiFormatCondition/Methods/GetParent.md).

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiUniqueValues](../ApiUniqueValues.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Retrieve the range that owns a unique-values conditional formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I find the parent range of a unique-values formatting rule in a spreadsheet?

// Trace a unique-values rule back to the range it belongs to in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let parent = uniqueValuesCondition.GetParent();
let parentAddress = parent.GetAddress();

worksheet.GetRange("C1").SetValue("Parent range:");
worksheet.GetRange("C2").SetValue(parentAddress);
```
