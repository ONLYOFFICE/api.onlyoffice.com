# GetOperator

Returns the comparison operator of the icon criterion.

## Syntax

```javascript
expression.GetOperator();
```

`expression` - A variable that represents a [ApiIconCriterion](../ApiIconCriterion.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

This example shows how to get the comparison operator of an icon criterion.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Scores');
worksheet.GetRange('A2').SetValue(85);
worksheet.GetRange('A3').SetValue(60);
worksheet.GetRange('A4').SetValue(35);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();

const criteria = iconCondition.GetIconCriteria();
criteria[1].SetOperator('xlGreater');

for (let i = 0; i < criteria.length; i++) {
	const range = worksheet.GetRange('B' + (i + 2));
	range.SetValue('Criterion ' + (i + 1) + ' operator: ' + criteria[i].GetOperator());
}

```
