# SetShowValue

指定数据条是否显示单元格值。

## 语法

```javascript
expression.SetShowValue(showValue);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| showValue | 必需 | boolean |  | 为 true 时显示值，为 false 时隐藏值。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置数据条条件格式规则的显示值设置。

```javascript editor-xlsx
// How to control whether the data bar shows the value.

// Set the show value setting of a data bar conditional formatting rule.

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
worksheet.GetRange("C2").SetValue(dataBar.GetShowValue() ? "Yes" : "No");

dataBar.SetShowValue(false);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetShowValue() ? "Yes" : "No");

```
