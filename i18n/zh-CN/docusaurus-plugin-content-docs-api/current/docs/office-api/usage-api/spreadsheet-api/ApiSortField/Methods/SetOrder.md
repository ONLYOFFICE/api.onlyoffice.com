# SetOrder

设置排序顺序。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetOrder(sOrder);
```

`expression` - 表示 [ApiSortField](../ApiSortField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sOrder | 必需 | [SortOrder](../../Enumeration/SortOrder.md) |  | 排序顺序。 |

## 返回值

此方法不返回任何数据。

## 示例

反转现有排序条件的排序方向并在电子表格中重新排序表格。

```javascript editor-xlsx
// How do I switch a sort field from ascending to descending order in a spreadsheet?

// Update the ordering direction for a sort rule, then apply it to see the new row arrangement in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("A4").SetValue("Bananas");
let table = worksheet.AddListObject("xlSrcRange", "A1:A4");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending");

field.SetOrder("xlDescending");
sort.Apply();

worksheet.GetRange("C1").SetValue("First product after descending sort:");
worksheet.GetRange("D1").SetValue(worksheet.GetRange("A2").GetValue());
```
