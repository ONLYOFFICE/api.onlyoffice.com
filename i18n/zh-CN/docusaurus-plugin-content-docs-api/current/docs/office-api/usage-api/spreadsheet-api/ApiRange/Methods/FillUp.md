# FillUp

将范围底行的内容和格式复制到其余行。
如果范围只有一行，方法成功但不做任何更改。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.FillUp();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中将底行的内容重复到其上方的所有行。

```javascript editor-xlsx
// How do I propagate values and formulas upward through a column range in a spreadsheet?

// Extend data from the last row into every empty row above it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B5").SetValue("Alice");
worksheet.GetRange("C5").SetValue(1);
worksheet.GetRange("D5").SetValue("=C5+D6");

let range = worksheet.GetRange("B2:D5");
range.FillUp();
```
