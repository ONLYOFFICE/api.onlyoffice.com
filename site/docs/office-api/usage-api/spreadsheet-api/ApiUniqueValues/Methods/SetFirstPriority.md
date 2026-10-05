# SetFirstPriority

Sets the priority value for the current conditional formatting rule to "1" so that it will be evaluated before all other rules on the worksheet.

Inherited from [ApiFormatCondition.SetFirstPriority](../../ApiFormatCondition/Methods/SetFirstPriority.md).

## Syntax

```javascript
expression.SetFirstPriority();
```

`expression` - A variable that represents an [ApiUniqueValues](../ApiUniqueValues.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Move a unique values formatting rule to the top of the priority order in a spreadsheet.

```javascript editor-xlsx
// How do I make a unique values formatting rule evaluate before all others in a spreadsheet?

// Ensure a unique values rule takes precedence over competing formatting rules in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "B");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let condition2 = formatConditions.AddUniqueValues();
condition2.SetFillColor(Api.CreateColorFromRGB(0, 255, 0));

let priorityBefore = condition2.GetPriority();
condition2.SetFirstPriority();
let priorityAfter = condition2.GetPriority();

worksheet.GetRange("C1").SetValue("Priority before: " + priorityBefore);
worksheet.GetRange("C2").SetValue("Priority after: " + priorityAfter);
```
