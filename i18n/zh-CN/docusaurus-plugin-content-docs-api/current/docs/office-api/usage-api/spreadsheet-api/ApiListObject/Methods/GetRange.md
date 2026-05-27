# GetRange

返回表示表格范围的 ApiRange 对象。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetRange();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

获取电子表格中表格占用的完整单元格范围。

```javascript editor-xlsx
// How do I get the full address of every cell a table covers in a spreadsheet?

// Capture the entire span of a table, including its header and data rows, for use in other operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let range = table.GetRange();
worksheet.GetRange("D1").SetValue("Table range address:");
worksheet.GetRange("E1").SetValue(range.GetAddress());
```
