# SetNumberFormat

Sets the number format applied to a cell when the conditional formatting rule evaluates to true.

Inherited from [ApiFormatCondition.SetNumberFormat](../../ApiFormatCondition/Methods/SetNumberFormat.md).

## Syntax

```javascript
expression.SetNumberFormat(NumberFormat);
```

`expression` - A variable that represents an [ApiUniqueValues](../ApiUniqueValues.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| NumberFormat | Required | string |  | The number format code (e.g., "General", "#,##0.00", etc.) |

## Returns

This method doesn't return any data.

## Example

Assign a number display format to cells matched by a unique values rule in a spreadsheet.

```javascript editor-xlsx
// How do I control how numbers appear in cells highlighted by a unique values rule in a spreadsheet?

// Format the numeric output of uniquely matched cells using a custom pattern in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Numbers");
worksheet.GetRange("A2").SetValue(10.5);
worksheet.GetRange("A3").SetValue(20.3);
worksheet.GetRange("A4").SetValue(10.5);
worksheet.GetRange("A5").SetValue(30.7);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetNumberFormat("0.00%");

worksheet.GetRange("C1").SetValue("Number format set to percentage");
```
