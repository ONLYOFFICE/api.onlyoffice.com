# SetStopIfTrue

Sets whether the editor will stop evaluating additional formatting rules if this rule evaluates to true.

## Syntax

```javascript
expression.SetStopIfTrue(StopIfTrue);
```

`expression` - A variable that represents an [ApiFormatCondition](../ApiFormatCondition.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| StopIfTrue | Required | boolean |  | True to stop evaluating additional rules. |

## Returns

This method doesn't return any data.

## Example

Stop the evaluation of the lower priority formatting rules when a rule is fulfilled in a spreadsheet.

```javascript editor-xlsx
// How do I prevent the other conditional formatting rules from being applied to the cells which are already highlighted in a spreadsheet?

// Keep the number format of the cells greater than 200 untouched by the second rule in a spreadsheet.

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
let condition2 = formatConditions.Add("xlCellValue", "xlGreater", "20");

condition1.SetFillColor(Api.RGB(255, 0, 0));
condition1.SetStopIfTrue(true);

condition2.SetFillColor(Api.RGB(0, 255, 0));
condition2.SetNumberFormat("0.00");

worksheet.GetRange("C1").SetValue("The cells greater than 200 keep the general number format");
```
