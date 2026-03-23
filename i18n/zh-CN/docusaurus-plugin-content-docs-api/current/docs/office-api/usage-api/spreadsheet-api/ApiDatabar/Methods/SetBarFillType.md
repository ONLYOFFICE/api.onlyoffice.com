# SetBarFillType

设置数据条的填充类型。

## 语法

```javascript
expression.SetBarFillType(fillType);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fillType | 必需 | [XlDataBarFillType](../../Enumeration/XlDataBarFillType.md) |  | 数据条的填充类型设置（纯色或渐变）。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置数据条条件格式规则的填充类型。

```javascript editor-xlsx
// How to change the fill type setting of a data bar.

// Set the bar fill type of a data bar conditional formatting rule.

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
worksheet.GetRange("C2").SetValue(dataBar.GetBarFillType());

dataBar.SetBarFillType("xlDataBarFillSolid");

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetBarFillType());

```
