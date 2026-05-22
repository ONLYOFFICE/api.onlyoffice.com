# GetParent

Returns the parent list object.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiListColumn](../ApiListColumn.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiListObject](../../ApiListObject/ApiListObject.md)

## Example

Access the table that a column belongs to in a spreadsheet.

```javascript editor-xlsx
// How do I get back to the parent table from one of its columns in a spreadsheet?

// Identify which formatted table owns a given column when working with multiple tables in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let column = table.GetListColumns()[0];
let parentTable = column.GetParent();

worksheet.GetRange("D1").SetValue("Parent table name:");
worksheet.GetRange("E1").SetValue(parentTable.GetName());
```
