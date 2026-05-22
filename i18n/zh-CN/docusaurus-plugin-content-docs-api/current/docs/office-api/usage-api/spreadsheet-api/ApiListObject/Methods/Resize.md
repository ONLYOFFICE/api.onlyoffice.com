# Resize

将 ListObject 调整为新范围。不插入或移动单元格。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.Resize(Range);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| string |  | 表格的新范围，作为 ApiRange 对象或地址字符串，例如 **"A1:D10"**。 |

## 返回值

此方法不返回任何数据。

## 示例

扩展或收缩表格以覆盖电子表格中不同的单元格范围。

```javascript editor-xlsx
// How do I change which cells a table covers in a spreadsheet?

// Stretch an existing table to include newly added rows or columns in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
worksheet.GetRange("A4").SetValue("Grapes");
worksheet.GetRange("B4").SetValue(200);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.Resize("A1:B4");

worksheet.GetRange("D1").SetValue("New range:");
worksheet.GetRange("E1").SetValue(table.GetRange().GetAddress());
```
