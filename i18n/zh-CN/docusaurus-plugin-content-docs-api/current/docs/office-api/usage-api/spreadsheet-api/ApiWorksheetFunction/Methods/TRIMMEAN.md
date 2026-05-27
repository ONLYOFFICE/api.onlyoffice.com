# TRIMMEAN

返回一组数据值内部部分的平均值。

## 语法

```javascript
expression.TRIMMEAN(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 要修剪并计算平均值的值数组或区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要从数据集顶部和底部排除的数据点的小数部分。 |

## 返回值

number

## 示例

通过排除极值计算电子表格中数据集中间值的平均值。

```javascript editor-xlsx
// How do I find the average of interior data points in a spreadsheet?

// Get the trimmed mean that excludes outliers from a dataset in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let argumentsArr = [1, 2, 3, 4];

// Place the numbers in cells
for (let i = 0; i < argumentsArr.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(argumentsArr[i]);
}

// Get values from the range
let data = worksheet.GetRange("A1:A4");

// Calculate the TRIMMEAN of the range A1:A6
let func = Api.WorksheetFunction;
let result = func.TRIMMEAN(data, 0.6);
worksheet.GetRange("B1").SetValue(result);
```
