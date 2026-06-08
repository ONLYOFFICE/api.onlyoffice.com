# SetTotalsCalculation

设置列的汇总计算类型。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetTotalsCalculation(sType);
```

`expression` - 表示 [ApiListColumn](../ApiListColumn.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [XlTotalsCalculation](../../Enumeration/XlTotalsCalculation.md) |  | 汇总计算类型。 |

## 返回值

此方法不返回任何数据。

## 示例

为电子表格中表格列的汇总行分配汇总函数。

```javascript editor-xlsx
// How do I make a table column show a sum or average in its totals row in a spreadsheet?

// Choose the right calculation type for a column to present meaningful totals to readers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowTotals(true);

let column = table.GetListColumns()[1];
column.SetTotalsCalculation("xlTotalsCalculationSum");

worksheet.GetRange("D1").SetValue("Totals calculation set to:");
worksheet.GetRange("E1").SetValue(column.GetTotalsCalculation());
```
