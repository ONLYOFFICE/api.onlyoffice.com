# GetSortOnValue

Returns the value (color or null) by which this sort field is sorted.
For color-based sorts returns the fill/font color; otherwise returns null.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetSortOnValue();
```

`expression` - A variable that represents a [ApiSortField](../ApiSortField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null

## Example

Retrieve the specific color assigned to a color-based sort criterion in a spreadsheet.

```javascript editor-xlsx
// How do I read back the fill color that a sort field uses to order rows in a spreadsheet?

// Assign a sort color, then confirm its RGB value is stored correctly in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let yellowColor = Api.CreateColorFromRGB(255, 255, 0);
let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1"), "xlSortOnCellColor", "xlAscending");
field.SetSortOnColor(yellowColor, "xlSortOnCellColor");

let rgb = field.GetSortOnValue().GetRGB();
worksheet.GetRange("C1").SetValue("Sort color RGB:");
worksheet.GetRange("D1").SetValue(rgb);
```
