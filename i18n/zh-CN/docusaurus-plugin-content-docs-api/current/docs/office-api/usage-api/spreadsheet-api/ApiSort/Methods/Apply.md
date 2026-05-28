# Apply

将当前排序设置应用于表格。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Apply();
```

`expression` - 表示 [ApiSort](../ApiSort.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

使用预配置的排序字段在电子表格中对格式化表格运行排序。

```javascript editor-xlsx
// How do I trigger the sort after defining which columns to sort by in a spreadsheet?

// Execute the pending sort rules to reorder the table's rows in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
worksheet.GetRange("A4").SetValue("Bananas");
worksheet.GetRange("B4").SetValue(80);
let table = worksheet.AddListObject("xlSrcRange", "A1:B4");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
sortFields.Add(worksheet.GetRange("A2:A4"), "xlSortOnValues", "xlAscending");
sort.Apply();

worksheet.GetRange("D1").SetValue("First product after sort:");
worksheet.GetRange("E1").SetValue(worksheet.GetRange("A2").GetValue());
```
