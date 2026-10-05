# GetParent

Returns the parent range object of the current format condition.

Inherited from [ApiFormatCondition.GetParent](../../ApiFormatCondition/Methods/GetParent.md).

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Retrieve the formatting collection that owns an icon set rule in a spreadsheet.

```javascript editor-xlsx
// How do I access the parent collection that contains an icon set formatting rule in a spreadsheet?

// Trace an icon set rule back to the formatting collection it belongs to in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Values");
worksheet.GetRange("A2").SetValue(75);
worksheet.GetRange("A3").SetValue(55);
worksheet.GetRange("A4").SetValue(35);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let parent = iconCondition.GetParent();

worksheet.GetRange("B1").SetValue("Parent range: " + parent.GetAddress());
```
