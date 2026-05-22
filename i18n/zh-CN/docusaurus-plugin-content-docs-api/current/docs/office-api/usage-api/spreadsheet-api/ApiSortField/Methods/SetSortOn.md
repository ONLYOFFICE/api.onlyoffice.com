# SetSortOn

设置排序依据类型。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetSortOn(sSortOn);
```

`expression` - 表示 [ApiSortField](../ApiSortField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSortOn | 必需 | [XlSortOn](../../Enumeration/XlSortOn.md) |  | 用作排序条件的值。 |

## 返回值

此方法不返回任何数据。

## 示例

将电子表格中的排序列从按值排序切换为按单元格颜色排序。

```javascript editor-xlsx
// How do I make a column sort by background color instead of text in a spreadsheet?

// Change what a sort column is based on so rows group by color rather than content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
field.SetSortOn("xlSortOnCellColor");

worksheet.GetRange("C1").SetValue("Sort on after change:");
worksheet.GetRange("D1").SetValue(field.GetSortOn());
```
