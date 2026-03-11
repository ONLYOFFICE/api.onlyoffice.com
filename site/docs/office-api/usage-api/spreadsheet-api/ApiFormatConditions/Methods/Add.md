# Add

Adds a new format condition to the collection.

## Syntax

```javascript
expression.Add(Type, Operator, Formula1, Formula2);
```

`expression` - A variable that represents a [ApiFormatConditions](../ApiFormatConditions.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Type | Required | [XlFormatConditionType](../../Enumeration/XlFormatConditionType.md) |  | The format condition type. |
| Operator | Optional | [XlFormatConditionOperator](../../Enumeration/XlFormatConditionOperator.md) |  | The format condition operator. |
| Formula1 | Optional | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | The first formula. |
| Formula2 | Optional | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | The second formula. |

## Returns

[ApiFormatCondition](../../ApiFormatCondition/ApiFormatCondition.md) \| null

## Example

This example adds conditional formatting to a range.

```javascript editor-xlsx
// How to add conditional formatting rules to highlight cells based on values.

// Add different types of conditional formatting to cells.

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
if (condition1) {
    condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));
}

```
