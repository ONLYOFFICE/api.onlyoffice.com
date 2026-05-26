# GetCount

Returns a value that represents the number of objects in the collection.

## Syntax

```javascript
expression.GetCount();
```

`expression` - A variable that represents a [ApiAreas](../ApiAreas.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Count how many separate ranges make up a multi-area selection in a spreadsheet.

```javascript editor-xlsx
// How do I find the total number of distinct ranges within a multi-area selection in a spreadsheet?

// Determine the size of an areas collection to loop over each range individually in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let count = areas.GetCount();
range = worksheet.GetRange('A5');
range.SetValue("The number of ranges in the areas: ");
range.AutoFit(false, true);
worksheet.GetRange('B5').SetValue(count);
```
