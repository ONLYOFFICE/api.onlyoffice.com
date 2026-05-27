# SetSortOnColor

设置基于颜色排序的颜色。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetSortOnColor(oColor, sSortOn);
```

`expression` - 表示 [ApiSortField](../ApiSortField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 排序依据的颜色。 |
| sSortOn | 可选 | [XlSortOn](../../Enumeration/XlSortOn.md) | "xlSortOnCellColor" | “xlSortOnCellColor” 或 “xlSortOnFontColor”。 |

## 返回值

此方法不返回任何数据。

## 示例

排列电子表格中的表格行，使特定背景颜色以定义的顺序出现。

```javascript editor-xlsx
// How do I sort rows by fill color so red comes first and yellow comes second in a spreadsheet?

// Assign a target color to each sort column so the table groups rows by their background shade in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("A4").SetValue("Bananas");
worksheet.GetRange("A5").SetValue("Grapes");

let redColor    = Api.CreateColorFromRGB(255, 0,   0);
let yellowColor = Api.CreateColorFromRGB(255, 255, 0);

worksheet.GetRange("A3").FillColor = redColor;
worksheet.GetRange("A4").FillColor = yellowColor;

let table = worksheet.AddListObject("xlSrcRange", "A1:A5");

let sort   = table.GetSort();
let fields = sort.GetSortFields();

fields.Clear();

let field1 = fields.Add(worksheet.GetRange("A1"), "xlSortOnCellColor", "xlAscending");
field1.SetSortOnColor(redColor, "xlSortOnCellColor");

let field2 = fields.Add(worksheet.GetRange("A1"), "xlSortOnCellColor", "xlAscending");
field2.SetSortOnColor(yellowColor, "xlSortOnCellColor");

sort.Apply();

worksheet.GetRange("C1").SetValue("After sort by color:");
worksheet.GetRange("D1").SetValue(worksheet.GetRange("A2").GetValue());
worksheet.GetRange("D2").SetValue(worksheet.GetRange("A3").GetValue());
worksheet.GetRange("D3").SetValue(worksheet.GetRange("A4").GetValue());
worksheet.GetRange("D4").SetValue(worksheet.GetRange("A5").GetValue());
```
