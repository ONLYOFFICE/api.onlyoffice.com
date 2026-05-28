# GetOrientation

返回排序方向：“xlTopToBottom” 或 “xlLeftToRight”。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetOrientation();
```

`expression` - 表示 [ApiSort](../ApiSort.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlSortOrientation](../../Enumeration/XlSortOrientation.md)

## 示例

读取电子表格中的表格是按行排序还是按列排序。

```javascript editor-xlsx
// How do I check the direction a sort will run — top to bottom or left to right — in a spreadsheet?

// Retrieve the axis along which the sort rearranges data in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();

worksheet.GetRange("C1").SetValue("Sort orientation:");
worksheet.GetRange("D1").SetValue(sort.GetOrientation());
```
