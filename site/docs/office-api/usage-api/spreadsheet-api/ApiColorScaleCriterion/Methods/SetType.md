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

This example demonstrates setting the type of color scale criterion.

```javascript editor-xlsx
// How to change the type of a color scale criterion.

// Set the type of a color scale criterion.

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
    worksheet.GetRange("C2").SetValue(criteria[0].GetType());
    
    criteria[0].SetType("xlConditionValuePercent");
    
    worksheet.GetRange("C3").SetValue("After:");
    worksheet.GetRange("C4").SetValue(criteria[0].GetType());
}

```
