# Delete

从集合中移除此排序字段。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiSortField](../ApiSortField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

从电子表格中表格的排序规则移除一个排序条件。

```javascript editor-xlsx
// How do I drop a specific sort criterion so the table ignores that column in a spreadsheet?

// Trim the active sort rules down by deleting an unwanted field in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sortFields = table.GetSort().GetSortFields();
sortFields.Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
let field2 = sortFields.Add(worksheet.GetRange("B1:B3"), "xlSortOnValues", "xlDescending");

field2.Delete();

worksheet.GetRange("D1").SetValue("Fields count after delete:");
worksheet.GetRange("E1").SetValue(sortFields.GetCount());
```
