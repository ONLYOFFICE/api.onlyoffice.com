# SetOrder

Sets the sort order.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.SetOrder(sOrder);
```

`expression` - A variable that represents a [ApiSortField](../ApiSortField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sOrder | Required | [SortOrder](../../Enumeration/SortOrder.md) |  | The sort order. |

## Returns

This method doesn't return any data.

## Example

Reverse the sort direction of an existing sort criterion and re-sort the table in a spreadsheet.

```javascript editor-xlsx
// How do I switch a sort field from ascending to descending order in a spreadsheet?

// Update the ordering direction for a sort rule, then apply it to see the new row arrangement in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("A4").SetValue("Bananas");
let table = worksheet.AddListObject("xlSrcRange", "A1:A4");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending");

field.SetOrder("xlDescending");
sort.Apply();

worksheet.GetRange("C1").SetValue("First product after descending sort:");
worksheet.GetRange("D1").SetValue(worksheet.GetRange("A2").GetValue());
```
