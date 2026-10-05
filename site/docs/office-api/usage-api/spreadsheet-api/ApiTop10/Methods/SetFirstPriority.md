# SetFirstPriority

Sets the priority value for the current conditional formatting rule to "1" so that it will be evaluated before all other rules on the worksheet.

Inherited from [ApiFormatCondition.SetFirstPriority](../../ApiFormatCondition/Methods/SetFirstPriority.md).

## Syntax

```javascript
expression.SetFirstPriority();
```

`expression` - A variable that represents an [ApiTop10](../ApiTop10.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Move a top 10 conditional formatting rule ahead of all other rules in a spreadsheet.

```javascript editor-xlsx
// How do I make a top 10 rule take precedence over other formatting rules in a spreadsheet?

// Ensure the top values highlight always wins when multiple rules compete in a spreadsheet.

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
condition2.SetFirstPriority();
let priorityAfter = condition2.GetPriority();

worksheet.GetRange("C1").SetValue("Priority before: " + priorityBefore);
worksheet.GetRange("C2").SetValue("Priority after: " + priorityAfter);
```
