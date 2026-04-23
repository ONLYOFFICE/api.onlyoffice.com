# SetDirection

设置数据条的方向。

## 语法

```javascript
expression.SetDirection(direction);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| direction | 必需 | [XlReadingOrder](../../Enumeration/XlReadingOrder.md) |  | 数据条的方向设置（上下文、从左到右或从右到左）。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置数据条条件格式规则的方向。

```javascript editor-xlsx
// How to change the reading order direction of a data bar.

// Set the direction of a data bar conditional formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(dataBar.GetDirection());

dataBar.SetDirection("xlRTL");

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetDirection());

```
