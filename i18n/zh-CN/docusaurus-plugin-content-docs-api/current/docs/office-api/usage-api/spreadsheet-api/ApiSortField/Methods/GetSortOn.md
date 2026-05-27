# GetSortOn

返回排序依据类型：“xlSortOnValues”、“xlSortOnCellColor”、“xlSortOnFontColor”、“xlSortOnIcon”。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetSortOn();
```

`expression` - 表示 [ApiSortField](../ApiSortField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlSortOn](../../Enumeration/XlSortOn.md)

## 示例

读取电子表格中排序条件的依据——单元格值、填充颜色还是图标。

```javascript editor-xlsx
// How do I find out whether a sort field reorders rows by content or by formatting in a spreadsheet?

// Distinguish between value-based and color-based sorting for a given sort rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");

worksheet.GetRange("C1").SetValue("Sort on:");
worksheet.GetRange("D1").SetValue(field.GetSortOn());
```
