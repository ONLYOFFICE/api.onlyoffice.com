# Modify

Modifies the current format condition with the specified parameters.

## Syntax

```javascript
expression.Modify(Type, Operator, Formula1, Formula2);
```

`expression` - A variable that represents a [ApiUniqueValues](../ApiUniqueValues.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Type | Optional | [XlFormatConditionType](../../Enumeration/XlFormatConditionType.md) |  | The format condition type. |
| Operator | Optional | [XlFormatConditionOperator](../../Enumeration/XlFormatConditionOperator.md) |  | The format condition operator. |
| Formula1 | Optional | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | The first formula. |
| Formula2 | Optional | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | The second formula. |

## Returns

[ApiFormatCondition](../../ApiFormatCondition/ApiFormatCondition.md) \| null

## Example

This example modifies a conditional formatting rule.

```javascript editor-xlsx playground
// How to change the conditions of existing conditional formatting rules.

// Modify conditional formatting rule parameters.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(30);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(40);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlLess", "50");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original formula:");
worksheet.GetRange("C2").SetValue(condition1.Formula1);

condition1.Modify("xlCellValue", "xlGreater", "200");

worksheet.GetRange("C4").SetValue("Modified formula:");
worksheet.GetRange("C5").SetValue(condition1.Formula1);

```
