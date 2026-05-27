# Clear

从集合中移除所有排序字段。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiSortFields](../ApiSortFields.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

从格式化表格清除所有排序列，使电子表格中不保留排序规则。

```javascript editor-xlsx
// How do I remove every sort column from a table at once in a spreadsheet?

// Reset the table's sort setup by discarding all previously defined sort columns in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
sortFields.Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
sortFields.Add(worksheet.GetRange("B1:B3"), "xlSortOnValues", "xlDescending");

worksheet.GetRange("D1").SetValue("Before clear:");
worksheet.GetRange("E1").SetValue(sortFields.GetCount());

sortFields.Clear();

worksheet.GetRange("D2").SetValue("After clear:");
worksheet.GetRange("E2").SetValue(sortFields.GetCount());
```
