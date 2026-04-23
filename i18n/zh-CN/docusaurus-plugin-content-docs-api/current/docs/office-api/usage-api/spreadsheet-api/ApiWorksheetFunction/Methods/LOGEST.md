# LOGEST

返回描述与已知数据点匹配的指数曲线的统计信息。

## 语法

```javascript
expression.LOGEST(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) |  | *y = b*m^x* 方程中的 y 值集。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) |  | *y = b*m^x* 方程中的可选 x 值集。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 逻辑值：如果此参数设置为 **true** 或省略，则常数 *b* 正常计算；如果参数为 **false**，则 *b* 设为 1。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 逻辑值：如果此参数设置为 **true**，则返回附加的回归统计；如果参数为 **false** 或省略，则返回 m 系数和常数 *b*。 |

## 返回值

number

## 示例

此示例演示如何返回描述与已知数据点匹配的指数曲线的统计信息。

```javascript editor-xlsx
// How to get the statistics of exponential curve matching the data points.

// Use a function to return the statistics of exponential curve matching the data points.

const worksheet = Api.GetActiveSheet();

//configure function parameters
let yValues = [1500, 1230, 1700, 1000, 980, 1470, 1560, 1640, 1420, 1100];
let xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let constant = true;
let stats = false;

//set values in cells
for (let i = 0; i < yValues.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(yValues[i]);
}
for (let i = 0; i < xValues.length; i++) {
  worksheet.GetRange("B" + (i + 1)).SetValue(xValues[i]);
}

//get x and y ranges
let yRange = worksheet.GetRange("A1:A10");
let xRange = worksheet.GetRange("B1:B10");

let func = Api.WorksheetFunction;
//invoke LOGEST method
let ans = func.LOGEST(yRange, xRange, constant, stats);

//print answer
worksheet.GetRange("D1").SetValue(ans);

```
