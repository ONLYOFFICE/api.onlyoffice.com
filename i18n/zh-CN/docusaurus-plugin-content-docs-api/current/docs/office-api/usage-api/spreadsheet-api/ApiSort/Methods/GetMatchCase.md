# GetMatchCase

返回排序是否区分大小写。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetMatchCase();
```

`expression` - 表示 [ApiSort](../ApiSort.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

读取电子表格中表格的区分大小写排序是否已开启。

```javascript editor-xlsx
// How do I find out if uppercase and lowercase letters are treated differently when sorting in a spreadsheet?

// Inspect whether the sort distinguishes between upper and lower case text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();

worksheet.GetRange("C1").SetValue("Match case:");
worksheet.GetRange("D1").SetValue(sort.GetMatchCase());
```
