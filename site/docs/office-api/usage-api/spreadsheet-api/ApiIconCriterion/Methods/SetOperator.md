# SetOperator

Sets the comparison operator for the icon criterion.

## Syntax

```javascript
expression.SetOperator(operator);
```

`expression` - A variable that represents a [ApiIconCriterion](../ApiIconCriterion.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| operator | Required | string |  | The operator to set ("xlGreaterEqual" or "xlGreater"). |

## Returns

This method doesn't return any data.

## Example

Define the comparison operator for an icon criterion in a spreadsheet.

```javascript editor-xlsx
// How do I control whether an icon criterion triggers on values greater than or equal to a threshold in a spreadsheet?

// Choose between greater-than and other comparison rules to decide when an icon appears in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Results');
worksheet.GetRange('A2').SetValue(80);
worksheet.GetRange('A3').SetValue(55);
worksheet.GetRange('A4').SetValue(30);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();
const criteria = iconCondition.GetIconCriteria();
const secondCriterion = criteria[1];

worksheet.GetRange('B1').SetValue('Operator before: ' + secondCriterion.GetOperator());
secondCriterion.SetOperator('xlGreater');
worksheet.GetRange('B2').SetValue('Operator after: ' + secondCriterion.GetOperator());
```
