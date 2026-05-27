# SetShowHeaders

设置表格是否显示标题行。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetShowHeaders(show);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| show | 必需 | boolean |  | 指定是否显示表格的标题行。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中显示或隐藏表格的列标题行。

```javascript editor-xlsx
// How do I control whether a table displays its header row in a spreadsheet?

// Remove the header row from view to produce a compact table layout in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowHeaders(false);

worksheet.GetRange("D1").SetValue("Show headers:");
worksheet.GetRange("E1").SetValue(table.GetShowHeaders());
```
