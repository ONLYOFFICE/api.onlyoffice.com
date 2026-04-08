# GetParent

Returns the parent range object of the current format condition.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiFormatCondition](../ApiFormatCondition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get the parent range of a conditional formatting rule.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

worksheet.GetRange('A1').SetValue('Sales Data');
worksheet.GetRange('A2').SetValue(100);
worksheet.GetRange('A3').SetValue(250);
worksheet.GetRange('A4').SetValue(150);

const dataRange = worksheet.GetRange('A2:A4');
const formatConditions = dataRange.GetFormatConditions();
const condition = formatConditions.Add('xlCellValue', 'xlGreater', '200');
condition.SetFillColor(Api.CreateColorFromRGB(200, 100, 100));

const parentRange = condition.GetParent();
worksheet.GetRange('C1').SetValue('Parent range:');
worksheet.GetRange('C2').SetValue(parentRange.GetAddress());

```
