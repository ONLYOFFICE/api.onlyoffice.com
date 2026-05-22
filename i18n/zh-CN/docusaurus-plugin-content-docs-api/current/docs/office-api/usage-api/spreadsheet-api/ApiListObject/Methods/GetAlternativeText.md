# GetAlternativeText

返回表格的替代文本。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetAlternativeText();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中分配给表格的替代文本。

```javascript editor-xlsx
// How do I retrieve the accessibility description of a table in a spreadsheet?

// Check what descriptive label a table carries for assistive technologies in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");

let table = worksheet.AddListObject("xlSrcRange", "A1:A3");
table.SetAlternativeText("List of products");

worksheet.GetRange("C1").SetValue("Alternative text:");
worksheet.GetRange("D1").SetValue(table.GetAlternativeText());
```
