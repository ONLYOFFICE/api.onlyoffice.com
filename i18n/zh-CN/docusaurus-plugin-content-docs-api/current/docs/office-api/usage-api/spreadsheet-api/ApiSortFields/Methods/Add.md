# Add

向集合添加排序字段。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Add(Key, SortOn, Order, CustomOrder, DataOption);
```

`expression` - 表示 [ApiSortFields](../ApiSortFields.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Key | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 表格内定义排序列的范围。 |
| SortOn | 可选 | [XlSortOn](../../Enumeration/XlSortOn.md) | "xlSortOnValues" | 用作排序条件的值。 |
| Order | 可选 | [SortOrder](../../Enumeration/SortOrder.md) | "xlAscending" | 排序顺序。 |
| CustomOrder | 可选 | number \| string | 0 | 保留。引擎尚不支持自定义顺序排序。 |
| DataOption | 可选 | [XlSortDataOption](../../Enumeration/XlSortDataOption.md) | "xlSortNormal" | 数据排序选项。 |

## 返回值

[ApiSortField](../../ApiSortField/ApiSortField.md) \| null

## 示例

将列注册为电子表格中格式化表格的排序条件。

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
