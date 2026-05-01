# GetRank

Returns the rank value for the top 10 condition.

## Syntax

```javascript
expression.GetRank();
```

`expression` - A variable that represents a [ApiTop10](../ApiTop10.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the rank value for top 10 condition in a spreadsheet.

```javascript editor-xlsx
// How to retrieve the number of top or bottom values to highlight in the condition in a spreadsheet.

// Get the rank value for the top 10 rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Numbers");
worksheet.GetRange("A2").SetValue(15);
worksheet.GetRange("A3").SetValue(25);
worksheet.GetRange("A4").SetValue(35);
worksheet.GetRange("A5").SetValue(45);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

let rank = top10Condition.GetRank();
worksheet.GetRange("B1").SetValue("Current rank: " + rank);
```
