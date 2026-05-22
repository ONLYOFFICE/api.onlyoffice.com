# CONFIDENCE

使用正态分布返回总体平均值的置信区间。

## 语法

```javascript
expression.CONFIDENCE(arg1, arg2, arg3);
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

使用正态分布在电子表格中查找平均值的置信区间。

```javascript editor-xlsx
// What range of values likely contains the true average in a spreadsheet?

// Calculate the margin of error around an average estimate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CONFIDENCE(0.5, 57, 8);
worksheet.GetRange("B2").SetValue(ans);
```
