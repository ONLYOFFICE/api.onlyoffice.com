# GetSortOnValue

返回此排序字段排序依据的值（颜色或 null）。
对于基于颜色的排序，返回填充/字体颜色；否则返回 null。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.GetSortOnValue();
```

`expression` - 表示 [ApiSortField](../ApiSortField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

检索电子表格中分配给基于颜色的排序条件的特定颜色。

```javascript editor-xlsx
// How do I read back the fill color that a sort field uses to order rows in a spreadsheet?

// Assign a sort color, then confirm its RGB value is stored correctly in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let yellowColor = Api.CreateColorFromRGB(255, 255, 0);
let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1"), "xlSortOnCellColor", "xlAscending");
field.SetSortOnColor(yellowColor, "xlSortOnCellColor");

let rgb = field.GetSortOnValue().GetRGB();
worksheet.GetRange("C1").SetValue("Sort color RGB:");
worksheet.GetRange("D1").SetValue(rgb);
```
