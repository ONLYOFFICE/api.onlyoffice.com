# TREND

使用最小二乘法返回与已知数据点匹配的线性趋势中的数字。

## 语法

```javascript
expression.TREND(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | *y = mx + b* 方程中 y 值的区域或数组。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | *y = mx + b* 方程中 x 值的可选区域或数组，与 y 值数组大小相同的数组。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 此函数将为其返回相应 y 值的新 x 值的区域或数组。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 逻辑值：如果此参数设置为 **true** 或省略，则常数 *b* 正常计算；如果参数为 **false**，则 *b* 设为 0。 |

## 返回值

number

## 示例

此示例演示如何使用最小二乘法返回与已知数据点匹配的线性趋势中的数字。

```javascript editor-xlsx
// How to get numbers in a linear trend using the least squares method.

// Use a function to find a linear trend using data points by the least squares method.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let month = ["Month", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sales = ["Sales", "$1,500.00", "$1,230.00", "$1,700.00", "$1,000.00", "$980.00", "$1,470.00", "$1,560.00", "$1,640.00", "$1,420.00", "$1,100.00"];

for (let i = 0; i < month.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(month[i]);
}
for (let j = 0; j < sales.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(sales[j]);
}

worksheet.GetRange("C1").SetValue("Trend");
let range1 = worksheet.GetRange("B2:B11");
let range2 = worksheet.GetRange("A2:A11");
worksheet.GetRange("C2:C11").SetValue(func.TREND(range1, range2));
```
