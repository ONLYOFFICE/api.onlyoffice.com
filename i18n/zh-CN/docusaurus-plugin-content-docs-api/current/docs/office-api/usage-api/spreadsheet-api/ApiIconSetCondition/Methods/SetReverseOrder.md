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

在电子表格中的图标集格式规则内以相反顺序显示图标。

```javascript editor-xlsx
// How do I flip the direction of icons so the highest value gets the lowest icon in a spreadsheet?

// Invert the visual meaning of an icon set to match a descending scale or reversed ranking.

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
