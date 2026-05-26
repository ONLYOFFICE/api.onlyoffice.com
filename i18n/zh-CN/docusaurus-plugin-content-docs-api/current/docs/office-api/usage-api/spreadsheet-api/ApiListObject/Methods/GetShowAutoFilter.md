# GetShowAutoFilter

返回自动筛选下拉按钮是否显示在表格的标题行上。
对于新表格，默认返回 true。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetShowAutoFilter();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

读取电子表格中表格的自动筛选是否当前已开启。

```javascript editor-xlsx
// How do I check if the auto-filter is active on a table in a spreadsheet?

// Confirm the filter bar is present before relying on any filter controls the table provides in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Show AutoFilter:");
worksheet.GetRange("E1").SetValue(table.GetShowAutoFilter());
```
