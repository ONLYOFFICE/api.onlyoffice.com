# SetType

Sets the condition value type for the icon criterion.

## Syntax

```javascript
expression.SetType(type);
```

`expression` - A variable that represents a [ApiIconCriterion](../ApiIconCriterion.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [XlConditionValueTypes](../../Enumeration/XlConditionValueTypes.md) |  | The condition value type. Only "xlConditionValueNumber", "xlConditionValuePercent", "xlConditionValuePercentile", or "xlConditionValueFormula" are supported. |

## Returns

This method doesn't return any data.

## Example

Define whether an icon criterion threshold is a number, percent, or formula in a spreadsheet.

```javascript editor-xlsx
// How do I change the kind of value an icon criterion compares against in a spreadsheet?

// Switch an icon criterion to use a fixed number instead of a percentage or other threshold type in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Metrics');
worksheet.GetRange('A2').SetValue(90);
worksheet.GetRange('A3').SetValue(65);
worksheet.GetRange('A4').SetValue(40);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();
const criteria = iconCondition.GetIconCriteria();
const secondCriterion = criteria[1];

worksheet.GetRange('B1').SetValue('Type before: ' + secondCriterion.GetType());
secondCriterion.SetType('xlConditionValueNumber');
worksheet.GetRange('B2').SetValue('Type after: ' + secondCriterion.GetType());
```
