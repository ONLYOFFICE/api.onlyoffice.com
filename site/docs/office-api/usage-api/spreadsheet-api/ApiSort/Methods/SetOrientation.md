# SetOrientation

Sets the sort orientation.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.SetOrientation(sOrientation);
```

`expression` - A variable that represents a [ApiSort](../ApiSort.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sOrientation | Required | [XlSortOrientation](../../Enumeration/XlSortOrientation.md) |  | No description provided. |

## Returns

This method doesn't return any data.

## Example

Control whether table data sorts by rows or by columns in a spreadsheet.

```javascript editor-xlsx
// How do I choose a top-to-bottom or left-to-right sort direction in a spreadsheet?

// Pick the axis along which the table values are reordered in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
sort.SetOrientation("xlTopToBottom");

worksheet.GetRange("C1").SetValue("Sort orientation:");
worksheet.GetRange("D1").SetValue(sort.GetOrientation());
```
