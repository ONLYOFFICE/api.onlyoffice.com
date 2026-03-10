# FORECAST_ETS_STAT

返回预测的请求统计量。

## 语法

```javascript
expression.FORECAST_ETS_STAT(arg1, arg2, arg3, arg4, arg5, arg6);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 确定将预测新点的历史值的数值数据区域或数组。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 与历史值对应的日期/时间值区域。时间线区域必须与第二个参数大小相同。日期/时间值之间必须有恒定的步长，且不能为零。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 一个介于 1 和 8 之间的数字，表示将为计算的预测返回哪个统计量。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 指定季节性模式长度的可选数值。默认值 1 表示自动检测季节性。值 0 表示没有季节性。 |
| arg5 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 处理缺失值的可选数值。默认值 1 通过插值替换缺失值，0 则用零替换。 |
| arg6 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于聚合具有相同时间戳的多个值的可选数值。 |

## 返回值

number

## 示例

此示例演示如何返回预测的请求统计量。

```javascript editor-xlsx
// How to return the requested forecast statistic.

// Use function to return the forecast.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let dates = ["10/1/2017", "11/1/2017", "12/1/2017", "1/1/2018", "2/1/2018"];
let numbers = [12558, 14356, 16345, 18678, 14227];

for (let i = 0; i < dates.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(dates[i]);
}
for (let j = 0; j < numbers.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(numbers[j]);
}

let range1 = worksheet.GetRange("B1:B5");
let range2 = worksheet.GetRange("A1:A5");
worksheet.GetRange("B6").SetValue(func.FORECAST_ETS_STAT(range1, range2, 4));
```
