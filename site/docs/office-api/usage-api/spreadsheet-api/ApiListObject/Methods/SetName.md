# SetName

Sets the name of the table. Equivalent to SetDisplayName.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.SetName(name);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The new name for the table. |

## Returns

boolean

## Example

Rename a table so formulas and references use the new name in a spreadsheet.

```javascript editor-xlsx
// How do I change the internal name of a table in a spreadsheet?

// Update a table's identifier to keep structured formula references accurate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetName("SalesTable");

worksheet.GetRange("D1").SetValue("Table name:");
worksheet.GetRange("E1").SetValue(table.GetName());
```
