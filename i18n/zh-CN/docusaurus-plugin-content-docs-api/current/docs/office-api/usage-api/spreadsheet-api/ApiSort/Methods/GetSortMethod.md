# GetSortMethod

返回排序方法：“xlPinYin” 或 “xlStroke”。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetSortMethod();
```

`expression` - 表示 [ApiSort](../ApiSort.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlSortMethod](../../Enumeration/XlSortMethod.md)

## 示例

读取电子表格中表格内中文字符使用的排序方法。

```javascript editor-xlsx
// How do I find out whether the sort orders Chinese text by pronunciation or stroke count in a spreadsheet?

// Determine which algorithm governs the ordering of Chinese-language cell values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();

worksheet.GetRange("C1").SetValue("Sort method:");
worksheet.GetRange("D1").SetValue(sort.GetSortMethod());
```
