# GetCurrentRegion

Returns a range that represents the expanded range around the current range.

## Syntax

```javascript
expression.GetCurrentRegion();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Get the current region of a range in a spreadsheet.

```javascript editor-xlsx
// How can I get current region using a cell range in a spreadsheet?

// Get current region for a cell range in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue('Name');
worksheet.GetRange('C2').SetValue('Score');
worksheet.GetRange('B3').SetValue('Alice');
worksheet.GetRange('C3').SetValue(90);
worksheet.GetRange('B4').SetValue('Bob');
worksheet.GetRange('C4').SetValue(75);

const range = worksheet.GetRange('B3');
const region = range.GetCurrentRegion();
worksheet.GetRange('A1').SetValue('Current region: ' + region.GetAddress(true, true, 'xlA1', false));
```
