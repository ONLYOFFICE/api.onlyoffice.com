# GetType

Returns the type of the icon set conditional formatting rule.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents a [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XlFormatConditionType](../../Enumeration/XlFormatConditionType.md)

## Example

This example shows how to get the type of an icon set conditional formatting rule.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

worksheet.GetRange('A1').SetValue('Ratings');
worksheet.GetRange('A2').SetValue(90);
worksheet.GetRange('A3').SetValue(60);
worksheet.GetRange('A4').SetValue(25);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();

const conditionType = iconCondition.GetType();
worksheet.GetRange('B1').SetValue('Icon set condition type: ' + conditionType);

```
