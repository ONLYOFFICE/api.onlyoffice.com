# SetLastPriority

Sets the evaluation order for the current conditional formatting rule so it is evaluated after all other rules on the worksheet.

Inherited from [ApiFormatCondition.SetLastPriority](../../ApiFormatCondition/Methods/SetLastPriority.md).

## Syntax

```javascript
expression.SetLastPriority();
```

`expression` - A variable that represents an [ApiTop10](../ApiTop10.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Push a top 10 conditional formatting rule to the lowest priority position in a spreadsheet.

```javascript editor-xlsx
// How do I make a top 10 rule evaluate after all other formatting rules in a spreadsheet?

// Let other formatting rules take precedence by demoting the top 10 rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let condition2 = formatConditions.AddTop10();
condition2.SetFillColor(Api.CreateColorFromRGB(0, 255, 0));

let priorityBefore = condition2.GetPriority();
condition2.SetLastPriority();
let priorityAfter = condition2.GetPriority();

worksheet.GetRange("C1").SetValue("Priority before: " + priorityBefore);
worksheet.GetRange("C2").SetValue("Priority after: " + priorityAfter);
```
