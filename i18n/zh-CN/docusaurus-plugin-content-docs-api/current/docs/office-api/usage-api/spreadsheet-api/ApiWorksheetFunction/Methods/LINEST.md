# LINEST

通过使用最小二乘法拟合直线，返回描述与已知数据点匹配的线性趋势的统计信息。

## 语法

```javascript
expression.LINEST(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | *y = mx + b* 方程中的 y 值集。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | *y = mx + b* 方程中的可选 x 值集。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 逻辑值：如果此参数设置为 **true** 或省略，则常数 *b* 正常计算；如果参数为 **false**，则 *b* 设为 0。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 逻辑值：如果此参数设置为 **true**，则返回附加的回归统计；如果参数为 **false** 或省略，则返回 m 系数和常数 *b*。 |

## 返回值

number

## 示例

此示例演示如何通过使用最小二乘法拟合直线来返回描述与已知数据点匹配的线性趋势的统计信息。

```javascript editor-xlsx
// How to get statistics that describe a linear trend matching known data points.

// Use a function to return statistics that describe a linear trend matching known data points using the least squares method.

const worksheet = Api.GetActiveSheet();

//configure function parameters
let yValues = [1.5, 2, 3];
let xValues = [2, 3.1, 3.5];
let constant = true;
let stats = true;

//set values in cells
for (let i = 0; i < yValues.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(yValues[i]);
}
for (let n = 0; n < xValues.length; n++) {
  worksheet.GetRange("B" + (n + 1)).SetValue(xValues[n]);
}

//get x and y ranges
let yRange = worksheet.GetRange("A1:A3");
let xRange = worksheet.GetRange("B1:B3");
let func = Api.WorksheetFunction;

//invoke LINEST method
let ans = func.LINEST(yRange, xRange, constant, stats);

//print answer 
 worksheet.GetRange("D1").SetValue(ans);


```
