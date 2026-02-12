# GetCount

Returns the rows or columns count.

## Syntax

```javascript
expression.GetCount();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the cells count in the range.

```javascript editor-xlsx
// How to find out how many cells a range has.

// Get a range, get its cells count and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let count = worksheet.GetRange("A1:C1").GetCount();
worksheet.GetRange("A4").SetValue("Count: ");
worksheet.GetRange("B4").SetValue(count);
```
