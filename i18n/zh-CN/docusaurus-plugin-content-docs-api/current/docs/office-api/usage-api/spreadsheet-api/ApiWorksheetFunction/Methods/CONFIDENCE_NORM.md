# CONFIDENCE_NORM

使用正态分布返回总体平均值的置信区间。

## 语法

```javascript
expression.CONFIDENCE_NORM(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算置信水平的显著性水平，一个大于 0 且小于 1 的数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 数据区域的总体标准差，假定为已知。此值必须大于 0。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 样本大小。 |

## 返回值

number

## 示例

确定电子表格中估计平均值的准确范围。

```javascript editor-xlsx
// What uncertainty level should you expect around your average in a spreadsheet?

// Measure how confident you can be in your average calculation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CONFIDENCE_NORM(0.5, 57, 8);
worksheet.GetRange("B2").SetValue(ans);
```
