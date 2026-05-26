# GetKey

返回排序键范围（完整表格列）。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetKey();
```

`expression` - 表示 [ApiSortField](../ApiSortField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

读取电子表格中排序条件针对的列范围。

```javascript editor-xlsx
// How do I find out which cells a sort field is based on in a spreadsheet?

// Confirm the exact data range driving a particular sort rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
let field = sortFields.Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
let key = field.GetKey();

worksheet.GetRange("D1").SetValue("Sort key address:");
worksheet.GetRange("E1").SetValue(key ? key.GetAddress() : "none");
```
