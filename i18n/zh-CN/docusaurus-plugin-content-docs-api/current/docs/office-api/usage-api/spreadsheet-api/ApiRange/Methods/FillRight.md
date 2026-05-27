# FillRight

将范围最左列的内容和格式复制到其余列。
如果范围只有一列，方法成功但不做任何更改。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.FillRight();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中将最左列的内容重复到其右侧的所有列。

```javascript editor-xlsx
// How do I propagate values and formulas rightward through a row range in a spreadsheet?

// Extend data from the first column into every empty column after it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B2").SetValue("Alice");
worksheet.GetRange("B3").SetValue(1);
worksheet.GetRange("B4").SetValue("=B3+A4");

let range = worksheet.GetRange("B2:E4");
range.FillRight();
```
