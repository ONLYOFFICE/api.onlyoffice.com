# SetIconSet

设置条件格式规则的图标集类型。

## 语法

```javascript
expression.SetIconSet(iconSet);
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| iconSet | 必需 | [XlIconSet](../../Enumeration/XlIconSet.md) |  | 要应用的图标集类型。 |

## 返回值

boolean

## 示例

在电子表格中为条件格式规则应用特定图标集。

```javascript editor-xlsx
// How do I choose which icon set appears in a conditional formatting rule in a spreadsheet?

// Switch the icons used to visualize data ranges without changing the rule itself.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(90);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(60);
worksheet.GetRange("A5").SetValue(40);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

worksheet.GetRange("B1").SetValue("Before: Default icon set");
iconCondition.SetIconSet("xl4Arrows");
worksheet.GetRange("B2").SetValue("After: Changed to 4 arrows");
```
