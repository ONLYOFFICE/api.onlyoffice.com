# SetShowAutoFilter

设置表格上是否存在自动筛选。
设为 false 将完全移除自动筛选；设为 true 将在不存在时创建自动筛选。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetShowAutoFilter(show);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| show | 必需 | boolean |  | 指定表格上是否存在自动筛选。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中显示或隐藏表格标题行上的筛选控件。

```javascript editor-xlsx
// How do I turn the AutoFilter on or off for a table in a spreadsheet?

// Remove all filter buttons from a table to present a cleaner view in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowAutoFilter(false);

worksheet.GetRange("D1").SetValue("Show AutoFilter:");
worksheet.GetRange("E1").SetValue(table.GetShowAutoFilter());
```
