# GetShowTableStyleFirstColumn

返回是否对表格应用了第一列格式。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetShowTableStyleFirstColumn();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

读取电子表格中表格的第一列是否有特殊高亮格式。

```javascript editor-xlsx
// How do I check if the first column stands out with distinct styling in a spreadsheet?

// Determine if the table draws attention to its leftmost column before modifying the layout in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("First column highlight:");
worksheet.GetRange("E1").SetValue(table.GetShowTableStyleFirstColumn());
```
