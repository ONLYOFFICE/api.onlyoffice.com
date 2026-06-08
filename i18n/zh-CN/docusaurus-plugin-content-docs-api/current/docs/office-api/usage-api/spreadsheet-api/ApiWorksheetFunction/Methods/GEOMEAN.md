# GEOMEAN

返回正数数值数据的几何平均值。

## 语法

```javascript
expression.GEOMEAN(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| number[] \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个数值，用于计算几何平均值。参数可以是数字、名称、区域或数字数组。 |

## 返回值

number

## 示例

计算电子表格中一组正数的几何平均值。

```javascript editor-xlsx
// How do I find the geometric average of my data in a spreadsheet?

// Get the nth root of the product of n values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GEOMEAN(28, 16, 878, 800, 1650, 2000);
worksheet.GetRange("B2").SetValue(ans);
```
