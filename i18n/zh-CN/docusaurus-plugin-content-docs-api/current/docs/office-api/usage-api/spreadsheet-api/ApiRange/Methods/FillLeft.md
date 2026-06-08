# FillLeft

将范围最右列的内容和格式复制到其余列。
如果范围只有一列，方法成功但不做任何更改。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.FillLeft();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中将最右列的内容重复到其左侧的所有列。

```javascript editor-xlsx
// How do I propagate values and formulas leftward through a row range in a spreadsheet?

// Extend data from the last column into every empty column before it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("E2").SetValue("Alice");
worksheet.GetRange("E3").SetValue(1);
worksheet.GetRange("E4").SetValue("=E3+F4");

let range = worksheet.GetRange("B2:E4");
range.FillLeft();
```
