# SetShowIconOnly

指定是否在图标集规则中仅显示图标（不显示单元格值）。

## 语法

```javascript
expression.SetShowIconOnly(showIconOnly);
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| showIconOnly | 必需 | boolean |  | 为 true 时仅显示图标，为 false 时同时显示图标和值。 |

## 返回值

boolean

## 示例

此示例演示如何仅显示图标而不显示单元格值。

```javascript editor-xlsx
// How to configure icon set to hide cell values and show only icons.

// Set the icon set rule to display only icons.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Status");
worksheet.GetRange("A2").SetValue(90);
worksheet.GetRange("A3").SetValue(60);
worksheet.GetRange("A4").SetValue(30);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

worksheet.GetRange("B1").SetValue("Before: Shows icons and values");
iconCondition.SetShowIconOnly(true);
worksheet.GetRange("B2").SetValue("After: Shows icons only");

```
