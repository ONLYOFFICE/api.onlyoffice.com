# SetPriority

设置此排序字段从 1 开始的优先级，在集合中重新定位。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetPriority(priority);
```

`expression` - 表示 [ApiSortField](../ApiSortField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| priority | 必需 | number |  | 排序字段新的从 1 开始的优先级。 |

## 返回值

此方法不返回任何数据。

## 示例

通过为其中一个分配更高优先级来在电子表格中重新排序排序列。

```javascript editor-xlsx
// How do I change which column is sorted first in a spreadsheet?

// Move a sort column to the top of the sort order so its values take precedence in a spreadsheet.

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
sortFields.Add(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending");
let fieldPrice = sortFields.Add(worksheet.GetRange("B1"), "xlSortOnValues", "xlAscending");

fieldPrice.SetPriority(1);
sort.Apply();

worksheet.GetRange("D1").SetValue("First product after sort by price:");
worksheet.GetRange("E1").SetValue(worksheet.GetRange("A2").GetValue());
```
