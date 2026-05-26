# GetHeader

返回标题设置。对于 ListObject 始终为 “xlYes”。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetHeader();
```

`expression` - 表示 [ApiSort](../ApiSort.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中表格排序是否将第一行视为标题。

```javascript editor-xlsx
// How do I find out if the sort will skip the header row or include it in a spreadsheet?

// Determine whether the top row is excluded from sorting as a title row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();

worksheet.GetRange("C1").SetValue("Header setting:");
worksheet.GetRange("D1").SetValue(sort.GetHeader());
```
