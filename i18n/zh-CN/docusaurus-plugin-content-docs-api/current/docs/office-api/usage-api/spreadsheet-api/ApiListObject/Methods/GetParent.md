# GetParent

返回作为表格父级的 ApiWorksheet 对象。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## 示例

识别电子表格中包含给定表格的工作表。

```javascript editor-xlsx
// How do I find out which sheet a table belongs to in a spreadsheet?

// Navigate from a table back to its parent sheet to work with other cells on the same sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let parent = table.GetParent();
worksheet.GetRange("D1").SetValue("Parent sheet name:");
worksheet.GetRange("E1").SetValue(parent.GetName());
```
