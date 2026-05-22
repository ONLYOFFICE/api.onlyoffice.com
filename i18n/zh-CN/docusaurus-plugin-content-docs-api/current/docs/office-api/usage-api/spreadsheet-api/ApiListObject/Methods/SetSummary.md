# SetSummary

设置表格的摘要描述（替代文本摘要）。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetSummary(sSummary);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSummary | 必需 | string |  | 未提供描述。 |

## 返回值

此方法不返回任何数据。

## 示例

为电子表格中的表格分配纯文本描述。

```javascript editor-xlsx
// How do I add a summary or description to a table in a spreadsheet?

// Store a short note about the table's contents so the purpose of the data is clear in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetSummary("Monthly product sales data");

worksheet.GetRange("D1").SetValue("Summary:");
worksheet.GetRange("E1").SetValue(table.GetSummary());
```
