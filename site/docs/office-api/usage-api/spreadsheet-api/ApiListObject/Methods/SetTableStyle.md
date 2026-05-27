# SetTableStyle

Sets the table style by name.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.SetTableStyle(styleName);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| styleName | Required | string |  | The name of the table style to apply. |

## Returns

This method doesn't return any data.

## Example

Apply a built-in visual style to a table in a spreadsheet.

```javascript editor-xlsx
// How do I change the color scheme or look of a table in a spreadsheet?

// Pick one of the preset table styles by name to instantly restyle the colors and borders of a table in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetTableStyle("TableStyleMedium2");

worksheet.GetRange("D1").SetValue("Table style:");
worksheet.GetRange("E1").SetValue(table.GetTableStyle());
```
