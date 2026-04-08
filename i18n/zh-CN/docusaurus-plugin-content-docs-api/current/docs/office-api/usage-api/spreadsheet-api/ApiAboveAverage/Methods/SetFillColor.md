# SetFillColor

使用先前创建的颜色对象设置格式条件的背景颜色。
当先前创建的颜色对象为 null 时设置为「无填充」。

## 语法

```javascript
expression.SetFillColor(oColor);
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 指定格式条件背景颜色的颜色对象。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置条件格式规则的背景颜色。

```javascript editor-xlsx
// How to apply background colors to conditional formatting rules.

// Set conditional formatting rule background color.

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

worksheet.GetRange("C1").SetValue("Original color:");
worksheet.GetRange("C2").SetValue("No Fill");

let fillColor = Api.CreateColorFromRGB(255, 255, 0);
condition1.SetFillColor(fillColor);

worksheet.GetRange("C4").SetValue("New color:");
worksheet.GetRange("C5").SetValue("Yellow background");

```
