# GetCount

返回排序字段的数量。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiSortFields](../ApiSortFields.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算电子表格中格式化表格当前配置的排序列数量。

```javascript editor-xlsx
// How do I find out how many sort columns a table has in a spreadsheet?

// Read the total number of active sort columns to verify the table's sort setup in a spreadsheet.

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

worksheet.GetRange("D1").SetValue("Sort fields count:");
worksheet.GetRange("E1").SetValue(sortFields.GetCount());
```
