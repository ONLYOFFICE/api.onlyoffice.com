# SetTableStyle

按名称设置表格样式。内置表格样式名称：TableStyleLight1-21、TableStyleMedium1-28、TableStyleDark1-11。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetTableStyle(styleName);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| styleName | 必需 | string |  | 内置表格样式的名称（例如，"TableStyleMedium9"），或工作簿中定义的自定义样式。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为表格应用内置视觉样式。

```javascript editor-xlsx
// How do I change the color scheme or look of a table in a spreadsheet?

// Pick one of the preset table styles by name to instantly restyle the colors and borders of a table in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetTableStyle("TableStyleMedium2");

worksheet.GetRange("D1").SetValue("Table style:");
worksheet.GetRange("E1").SetValue(table.GetTableStyle());
```
