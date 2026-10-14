# SetStopIfTrue

Sets whether the editor will stop evaluating additional formatting rules if this rule evaluates to true.

## Syntax

```javascript
expression.SetStopIfTrue(StopIfTrue);
```

`expression` - A variable that represents an [ApiTop10](../ApiTop10.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| StopIfTrue | Required | boolean |  | True to stop evaluating additional rules. |

## Returns

This method doesn't return any data.

## Example

Stop the evaluation of the lower priority formatting rules when a top/bottom rule is fulfilled in a spreadsheet.

```javascript editor-xlsx
// How do I prevent the other formatting rules from being applied to the top values in a spreadsheet?

// Keep the two greatest values formatted by the top 10 rule only in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let top10 = formatConditions.AddTop10();
let condition = formatConditions.Add("xlCellValue", "xlGreater", "20");

top10.SetRank(2);
top10.SetFillColor(Api.RGB(255, 0, 0));
top10.SetStopIfTrue(true);

condition.SetNumberFormat("0.00");

worksheet.GetRange("C1").SetValue("The top 2 cells keep the general number format");
```
