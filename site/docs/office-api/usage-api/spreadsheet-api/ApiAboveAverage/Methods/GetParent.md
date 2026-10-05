# GetParent

Returns the parent range object of the current format condition.

Inherited from [ApiFormatCondition.GetParent](../../ApiFormatCondition/Methods/GetParent.md).

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiAboveAverage](../ApiAboveAverage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Retrieve the formatting collection that owns an above-average rule in a spreadsheet.

```javascript editor-xlsx
// How do I access the parent container of an above-average conditional formatting rule in a spreadsheet?

// Navigate from an individual rule back up to the collection it belongs to in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data Set");
worksheet.GetRange("A2").SetValue(45);
worksheet.GetRange("A3").SetValue(67);
worksheet.GetRange("A4").SetValue(89);
worksheet.GetRange("A5").SetValue(23);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();

let parentRange = aboveAverageCondition.GetParent();
worksheet.GetRange("C1").SetValue("Parent range:");
worksheet.GetRange("C2").SetValue(parentRange.GetAddress());
```
