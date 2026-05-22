# Add

Adds a sort field to the collection.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.Add(Key, SortOn, Order, CustomOrder, DataOption);
```

`expression` - A variable that represents a [ApiSortFields](../ApiSortFields.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Key | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | A range within the table that defines the sort column. |
| SortOn | Optional | [XlSortOn](../../Enumeration/XlSortOn.md) | "xlSortOnValues" | The value used as the sort criteria. |
| Order | Optional | [SortOrder](../../Enumeration/SortOrder.md) | "xlAscending" | The sort order. |
| CustomOrder | Optional | number \| string | 0 | Reserved. Custom order sorting is not yet supported by the engine. |
| DataOption | Optional | [XlSortDataOption](../../Enumeration/XlSortDataOption.md) | "xlSortNormal" | The data sort option. |

## Returns

[ApiSortField](../../ApiSortField/ApiSortField.md) \| null

## Example

Register a column as a sort criterion for a formatted table in a spreadsheet.

```javascript editor-xlsx
// How do I tell a table which column to sort by in a spreadsheet?

// Define the sort direction for a column so the table rows reorder automatically in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("A4").SetValue("Bananas");
let table = worksheet.AddListObject("xlSrcRange", "A1:A4");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
sortFields.Add(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending");

worksheet.GetRange("C1").SetValue("Fields count:");
worksheet.GetRange("D1").SetValue(sortFields.GetCount());
worksheet.GetRange("C2").SetValue("First product after sort:");
worksheet.GetRange("D2").SetValue(worksheet.GetRange("A2").GetValue());
```
