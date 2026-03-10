# FORECAST_ETS_SEASONALITY

返回应用程序为指定时间序列检测到的重复模式的长度。

## 语法

```javascript
expression.FORECAST_ETS_SEASONALITY(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 确定将预测新点的历史值的数值数据区域或数组。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 与历史值对应的日期/时间值区域。时间线区域必须与第二个参数大小相同。日期/时间值之间必须有恒定的步长，且不能为零。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 处理缺失值的可选数值。默认值 1 通过插值替换缺失值，0 则用零替换。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于聚合具有相同时间戳的多个值的可选数值。 |

## 返回值

number

## 示例

此示例演示如何返回应用程序为指定时间序列检测到的重复模式的长度。

```javascript editor-xlsx
// How to return the length of the repetitive pattern.

// Use function to return the length of the repetitive pattern for the specified time series.

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
worksheet.GetRange("B6").SetValue(func.FORECAST_ETS_SEASONALITY(range1, range2, 1, 1));
```
