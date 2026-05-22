# SetType

Sets the type for the color scale criterion.

## Syntax

```javascript
expression.SetType(type);
```

`expression` - A variable that represents a [ApiColorScaleCriterion](../ApiColorScaleCriterion.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [XlConditionValueTypes](../../Enumeration/XlConditionValueTypes.md) |  | The type of the color scale criterion. |

## Returns

This method doesn't return any data.

## Example

Change the threshold type for a color scale rule point in a spreadsheet.

```javascript editor-xlsx
// How do I update what kind of boundary a color scale rule point uses in a spreadsheet?

// Switch a color scale rule entry from one threshold category to another to adjust how the gradient is anchored in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(30);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(70);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale(2);
let criteria = colorScale.GetColorScaleCriteria();

if (criteria && criteria.length > 0) {
    worksheet.GetRange("C1").SetValue("Before:");
    worksheet.GetRange("C2").SetValue(criteria[1].GetType());
    
    criteria[1].SetType("xlConditionValuePercent");
    
    worksheet.GetRange("C3").SetValue("After:");
    worksheet.GetRange("C4").SetValue(criteria[1].GetType());
}
```
