# SetLastPriority

Sets the evaluation order for the current conditional formatting rule so it is evaluated after all other rules on the worksheet.

Inherited from [ApiFormatCondition.SetLastPriority](../../ApiFormatCondition/Methods/SetLastPriority.md).

## Syntax

```javascript
expression.SetLastPriority();
```

`expression` - A variable that represents an [ApiUniqueValues](../ApiUniqueValues.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Move a unique values formatting rule to the bottom of the priority order in a spreadsheet.

```javascript editor-xlsx
// How do I make a unique values formatting rule evaluate after all others in a spreadsheet?

// Push a unique values rule so it yields to every other formatting rule in a spreadsheet.

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
condition2.SetLastPriority();
let priorityAfter = condition2.GetPriority();

worksheet.GetRange("C1").SetValue("Priority before: " + priorityBefore);
worksheet.GetRange("C2").SetValue("Priority after: " + priorityAfter);
```
