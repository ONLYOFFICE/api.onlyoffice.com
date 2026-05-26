# GetShowTableStyleRowStripes

Returns whether banded row formatting is applied to the table.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetShowTableStyleRowStripes();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Read whether alternating row shading is turned on for a table in a spreadsheet.

```javascript editor-xlsx
// How do I find out if a table has row stripe formatting applied in a spreadsheet?

// Detect the row stripe setting before adjusting the visual style of the table in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Row stripes:");
worksheet.GetRange("E1").SetValue(table.GetShowTableStyleRowStripes());
```
