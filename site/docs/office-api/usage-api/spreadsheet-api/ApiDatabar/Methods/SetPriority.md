# SetPriority

Sets the priority value of the conditional formatting rule.

## Syntax

```javascript
expression.SetPriority(Priority);
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Priority | Required | number |  | The priority value (1-based). |

## Returns

This method doesn't return any data.

## Example

This example sets the priority of a conditional formatting rule.

```javascript editor-xlsx
// How to change the priority value of conditional formatting rules.

// Set conditional formatting rule priority.

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

worksheet.GetRange("C1").SetValue("Original priority:");
worksheet.GetRange("C2").SetValue(condition1.GetPriority());

condition1.SetPriority(5);

worksheet.GetRange("C4").SetValue("New priority:");
worksheet.GetRange("C5").SetValue(condition1.GetPriority());

```
