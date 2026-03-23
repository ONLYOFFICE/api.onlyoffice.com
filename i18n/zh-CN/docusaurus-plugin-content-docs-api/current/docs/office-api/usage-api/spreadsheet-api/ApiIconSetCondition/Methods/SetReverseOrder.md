# SetReverseOrder

指定图标集规则中的图标顺序是否反转。

## 语法

```javascript
expression.SetReverseOrder(reverse);
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| reverse | 必需 | boolean |  | 为 true 时反转图标顺序，否则为 false。 |

## 返回值

boolean

## 示例

此示例演示如何反转图标顺序显示。

```javascript editor-xlsx
// How to change the display order of icons in icon set formatting.

// Reverse the order in which icons are displayed.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Ratings");
worksheet.GetRange("A2").SetValue(5);
worksheet.GetRange("A3").SetValue(3);
worksheet.GetRange("A4").SetValue(1);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

worksheet.GetRange("B1").SetValue("Before: Normal icon order");
iconCondition.SetReverseOrder(true);
worksheet.GetRange("B2").SetValue("After: Reversed icon order");

```
