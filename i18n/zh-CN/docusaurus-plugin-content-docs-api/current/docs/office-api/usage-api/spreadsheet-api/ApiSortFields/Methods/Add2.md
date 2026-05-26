# Add2

添加支持链接数据类型（股票、地理）子字段的排序字段。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.Add2(Key, SortOn, Order, CustomOrder, DataOption, SubField);
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
| SubField | 可选 | string |  | 链接数据类型的子字段名称（例如 “Population”、“Volume”）。 |

## 返回值

[ApiSortField](../../ApiSortField/ApiSortField.md) \| null

## 示例

注册一个排序列，该列还可以针对电子表格中链接数据类型的子属性。

```javascript editor-xlsx
// How do I add a sort column with an optional sub-property for linked data in a spreadsheet?

// Supply a subfield alongside the column to refine what value the sort reads from each cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("A4").SetValue("Bananas");
let table = worksheet.AddListObject("xlSrcRange", "A1:A4");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
sortFields.Add2(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending", null, "xlSortNormal", null);

worksheet.GetRange("C1").SetValue("Fields count:");
worksheet.GetRange("D1").SetValue(sortFields.GetCount());
worksheet.GetRange("C2").SetValue("First product after sort:");
worksheet.GetRange("D2").SetValue(worksheet.GetRange("A2").GetValue());
```
