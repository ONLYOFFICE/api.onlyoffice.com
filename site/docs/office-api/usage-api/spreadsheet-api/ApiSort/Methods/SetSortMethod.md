# SetSortMethod

Sets the sort method.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetSortMethod(sortMethod);
```

`expression` - A variable that represents a [ApiSort](../ApiSort.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sortMethod | Required | [XlSortMethod](../../Enumeration/XlSortMethod.md) |  | The sort method. |

## Returns

This method doesn't return any data.

## Example

Choose how Chinese characters are ordered when sorting a table in a spreadsheet.

```javascript editor-xlsx
// How do I sort Chinese text by pronunciation rather than stroke order in a spreadsheet?

// Switch the ordering rule for Chinese entries between PinYin and stroke-count in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
sort.SetSortMethod("xlPinYin");

worksheet.GetRange("C1").SetValue("Sort method:");
worksheet.GetRange("D1").SetValue(sort.GetSortMethod());
```
