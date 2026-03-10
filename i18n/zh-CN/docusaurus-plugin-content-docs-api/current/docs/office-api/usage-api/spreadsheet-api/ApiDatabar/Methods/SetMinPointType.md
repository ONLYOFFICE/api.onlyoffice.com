# SetMinPointType

设置数据条最小值条件的类型。

## 语法

```javascript
expression.SetMinPointType(type);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [XlConditionValueTypes](../../Enumeration/XlConditionValueTypes.md) |  | 最小值条件的类型。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置数据条条件格式规则的最小点类型。

```javascript editor-xlsx
// How to change the type of the minimum condition value.

// Set the minimum point type of a data bar conditional formatting rule.

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
worksheet.GetRange("C2").SetValue(dataBar.GetMinPointType());

dataBar.SetMinPointType("xlConditionValuePercent");

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetMinPointType());

```
