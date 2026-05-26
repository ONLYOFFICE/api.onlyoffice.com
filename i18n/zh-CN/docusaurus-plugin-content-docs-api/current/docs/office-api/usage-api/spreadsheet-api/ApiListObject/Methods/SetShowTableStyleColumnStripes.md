# SetShowTableStyleColumnStripes

设置是否对表格应用条带列格式。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetShowTableStyleColumnStripes(bShow);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bShow | 必需 | boolean |  | 未提供描述。 |

## 返回值

此方法不返回任何数据。

## 示例

打开或关闭电子表格中表格的交替列底纹。

```javascript editor-xlsx
// How do I apply column stripes to a table style in a spreadsheet?

// Improve column readability by letting the table style alternate background colors across columns in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowTableStyleColumnStripes(true);

worksheet.GetRange("D1").SetValue("Column stripes:");
worksheet.GetRange("E1").SetValue(table.GetShowTableStyleColumnStripes());
```
