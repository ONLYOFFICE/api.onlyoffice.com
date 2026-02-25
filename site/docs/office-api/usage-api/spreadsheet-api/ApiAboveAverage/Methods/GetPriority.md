# GetPriority

Returns the priority value of the conditional formatting rule.

## Syntax

```javascript
expression.GetPriority();
```

`expression` - A variable that represents a [ApiAboveAverage](../ApiAboveAverage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example gets the priority of a conditional formatting rule.

```javascript editor-xlsx playground
// How to retrieve the priority value from conditional formatting rules.

// Get conditional formatting rule priority.

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

let priority = condition1.GetPriority();

worksheet.GetRange("C1").SetValue("Rule priority:");
worksheet.GetRange("C2").SetValue(priority);

```
