# Resize

Resizes the ListObject to a new range. Cells are not inserted or moved.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Resize(Range);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range | Required | [ApiRange](../../ApiRange/ApiRange.md) \| string |  | The new range for the table as an ApiRange object or address string, e.g. **"A1:D10"**. |

## Returns

This method doesn't return any data.

## Example

Expand or shrink a table to cover a different range of cells in a spreadsheet.

```javascript editor-xlsx
// How do I change which cells a table covers in a spreadsheet?

// Stretch an existing table to include newly added rows or columns in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
worksheet.GetRange("A4").SetValue("Grapes");
worksheet.GetRange("B4").SetValue(200);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.Resize("A1:B4");

worksheet.GetRange("D1").SetValue("New range:");
worksheet.GetRange("E1").SetValue(table.GetRange().GetAddress());
```
