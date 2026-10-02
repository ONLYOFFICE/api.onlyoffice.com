# SetFillColor

使用先前创建的颜色对象设置格式条件的背景颜色。

当先前创建的颜色对象为 null 时设置为“无填充”。

继承自 [ApiFormatCondition.SetFillColor](../../ApiFormatCondition/Methods/SetFillColor.md)。

## 语法

```javascript
expression.SetFillColor(oColor);
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 指定格式条件背景颜色的颜色对象。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为符合前 10 项条件格式规则的单元格着色。

```javascript editor-xlsx
// How do I choose a background color for highlighted top values in a spreadsheet?

// Make the highest-ranking cells stand out with a custom fill color in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();

let colorBefore = condition1.GetFillColor();
condition1.SetFillColor(Api.CreateColorFromRGB(0, 255, 0));
let colorAfter = condition1.GetFillColor();

worksheet.GetRange("C1").SetValue("Fill color changed");
worksheet.GetRange("C2").SetValue("Top 2 values now green");
```
