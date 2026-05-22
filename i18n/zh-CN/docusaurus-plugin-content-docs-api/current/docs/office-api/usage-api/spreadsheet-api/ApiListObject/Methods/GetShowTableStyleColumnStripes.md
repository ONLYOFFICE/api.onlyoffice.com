# GetShowTableStyleColumnStripes

返回是否对表格应用了条带列格式。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetShowTableStyleColumnStripes();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

读取电子表格中表格的交替列底纹是否已开启。

```javascript editor-xlsx
// How do I find out if a table has column stripe formatting applied in a spreadsheet?

// Detect the column stripe setting before adjusting the visual style of the table in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Column stripes:");
worksheet.GetRange("E1").SetValue(table.GetShowTableStyleColumnStripes());
```
