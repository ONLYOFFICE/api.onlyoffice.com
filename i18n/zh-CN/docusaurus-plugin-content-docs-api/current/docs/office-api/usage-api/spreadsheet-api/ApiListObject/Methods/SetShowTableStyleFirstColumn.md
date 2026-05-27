# SetShowTableStyleFirstColumn

设置是否对表格应用第一列格式。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetShowTableStyleFirstColumn(show);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| show | 必需 | boolean |  | 指定是否对表格应用首列格式。 |

## 返回值

此方法不返回任何数据。

## 示例

为电子表格中表格的第一列应用特殊格式。

```javascript editor-xlsx
// How do I make the first column of a table stand out visually in a spreadsheet?

// Turn on the first-column highlight to give the leftmost column a distinct look based on the table style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowTableStyleFirstColumn(true);

worksheet.GetRange("D1").SetValue("First column highlight:");
worksheet.GetRange("E1").SetValue(table.GetShowTableStyleFirstColumn());
```
