# GetParent

Returns the parent object for the specified collection.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiAreas](../ApiAreas.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the parent object for the specified collection in a spreadsheet.

```javascript editor-xlsx
// How to get a parent of the collection in a spreadsheet.

// Find a collection parent of the selected range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let parent = areas.GetParent();
let type = parent.GetClassType();
range = worksheet.GetRange('A4');
range.SetValue("The areas parent: ");
range.AutoFit(false, true);
worksheet.GetRange('B4').Paste(parent);
range = worksheet.GetRange('A5');
range.SetValue("The type of the areas parent: ");
range.AutoFit(false, true);
worksheet.GetRange('B5').SetValue(type);
```
