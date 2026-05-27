# Item

返回给定从 1 开始的索引处的排序字段。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Item(nIndex);
```

`expression` - 表示 [ApiSortFields](../ApiSortFields.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | 必需 | number |  | 从 1 开始的索引。 |

## 返回值

[ApiSortField](../../ApiSortField/ApiSortField.md) \| null

## 示例

按位置从电子表格中表格的排序列表中选取特定排序列。

```javascript editor-xlsx
// How do I access one particular sort column by its position in a spreadsheet?

// Look up a sort column at a given index to inspect or change its order setting in a spreadsheet.

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

let field = sortFields.Item(1);

worksheet.GetRange("D1").SetValue("Sort order:");
worksheet.GetRange("E1").SetValue(field.GetOrder());
```
