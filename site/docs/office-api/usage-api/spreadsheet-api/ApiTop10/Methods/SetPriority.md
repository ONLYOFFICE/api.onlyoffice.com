# SetPriority

Sets the priority value of the conditional formatting rule.

Inherited from [ApiFormatCondition.SetPriority](../../ApiFormatCondition/Methods/SetPriority.md).

## Syntax

```javascript
expression.SetPriority(Priority);
```

`expression` - A variable that represents an [ApiTop10](../ApiTop10.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Priority | Required | number |  | The priority value (1-based). |

## Returns

This method doesn't return any data.

## Example

Assign a specific priority number to a top 10 conditional formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I control the evaluation order of a top 10 rule among other formatting rules in a spreadsheet?

// Place a top values rule at an exact position in the formatting priority queue in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let priorityBefore = condition1.GetPriority();
condition1.SetPriority(5);
let priorityAfter = condition1.GetPriority();

worksheet.GetRange("C1").SetValue("Priority before: " + priorityBefore);
worksheet.GetRange("C2").SetValue("Priority after: " + priorityAfter);
```
