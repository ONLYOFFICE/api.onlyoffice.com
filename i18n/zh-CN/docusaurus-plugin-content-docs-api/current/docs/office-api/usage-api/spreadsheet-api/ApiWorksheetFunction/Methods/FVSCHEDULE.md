# FVSCHEDULE

在应用一系列复合利率后返回初始本金的未来值。

## 语法

```javascript
expression.FVSCHEDULE(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 投资的现值。 |
| arg2 | 必需 | number[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 要应用的利率数组。 |

## 返回值

number

## 示例

此示例演示如何在应用一系列复利利率后返回初始本金的未来值。

```javascript editor-xlsx
// How to get the future value of an initial principal.

// Use a function to get future value of an initial principal based on different parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue("Principal");
worksheet.GetRange("B1").SetValue(100);
worksheet.GetRange("A2").SetValue("Rate 1");
worksheet.GetRange("B2").SetValue(0.03);
worksheet.GetRange("A3").SetValue("Rate 2");
worksheet.GetRange("B3").SetValue(0.05);
worksheet.GetRange("A4").SetValue("Rate 3");
worksheet.GetRange("B4").SetValue(0.1);
let range = worksheet.GetRange("B2:B4");
worksheet.GetRange("B5").SetValue(func.FVSCHEDULE(100, range));
```
