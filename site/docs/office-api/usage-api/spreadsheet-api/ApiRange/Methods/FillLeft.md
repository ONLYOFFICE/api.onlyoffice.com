# FillLeft

Copies the contents and formatting of the rightmost column of the range into the remaining columns.
If the range has only one column, the method succeeds but makes no changes.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.FillLeft();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Repeat the content of the rightmost column across all columns to the left in a spreadsheet.

```javascript editor-xlsx
// How do I propagate values and formulas leftward through a row range in a spreadsheet?

// Extend data from the last column into every empty column before it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("E2").SetValue("Alice");
worksheet.GetRange("E3").SetValue(1);
worksheet.GetRange("E4").SetValue("=E3+F4");

let range = worksheet.GetRange("B2:E4");
range.FillLeft();
```
