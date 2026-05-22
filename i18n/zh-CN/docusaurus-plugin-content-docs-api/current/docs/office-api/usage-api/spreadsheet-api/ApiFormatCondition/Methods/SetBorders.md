# SetBorders

设置条件格式规则的边框样式。

## 语法

```javascript
expression.SetBorders(bordersIndex, lineStyle, oColor);
```

`expression` - 表示 [ApiFormatCondition](../ApiFormatCondition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bordersIndex | 必需 | [BordersIndex](../../Enumeration/BordersIndex.md) |  | 指定单元格边框位置。 |
| lineStyle | 必需 | [LineStyle](../../Enumeration/LineStyle.md) |  | 指定用于形成单元格边框的线条样式。 |
| oColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 指定要设置给单元格边框的颜色的颜色对象。 |

## 返回值

此方法不返回任何数据。

## 示例

为匹配电子表格中条件格式规则的单元格添加彩色边框。

```javascript editor-xlsx
// How do I make matching cells show a border when a formatting condition is met in a spreadsheet?

// Highlight qualifying cells with edge lines through a conditional formatting rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let borderColor = Api.CreateColorFromRGB(255, 0, 0);
condition1.SetBorders("Top", "Thick", borderColor);
condition1.SetBorders("Bottom", "Thick", borderColor);

worksheet.GetRange("C1").SetValue("Borders applied:");
worksheet.GetRange("C2").SetValue("Red thick top/bottom borders");
```
