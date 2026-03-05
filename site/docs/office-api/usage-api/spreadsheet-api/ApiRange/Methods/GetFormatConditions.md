# GetFormatConditions

Returns the collection of conditional formatting rules for the current range.

## Syntax

```javascript
expression.GetFormatConditions();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFormatConditions](../../ApiFormatConditions/ApiFormatConditions.md)

## Example

This example shows how to get the format conditions collection for a range.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Score');
worksheet.GetRange('A2').SetValue(10);
worksheet.GetRange('A3').SetValue(30);
worksheet.GetRange('A4').SetValue(80);

const dataRange = worksheet.GetRange('A2:A4');
const formatConditions = dataRange.GetFormatConditions();
formatConditions.AddDatabar();
worksheet.GetRange('C1').SetValue('Format conditions count: ' + formatConditions.GetCount());

```
