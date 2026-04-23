# GROWTH

使用现有数据计算预测的指数增长。

## 语法

```javascript
expression.GROWTH(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | *y = b*m^x* 方程中的 y 值集，一个正数数组或区域。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | *y = b*m^x* 方程中的可选 x 值集，一个与 y 值集大小相同的正数数组或区域。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 函数将为其返回相应 y 值的新 x 值。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 逻辑值：如果此参数设置为 **true**，则常数 *b* 正常计算；如果参数为 **false** 或省略，则 *b* 设为 1。 |

## 返回值

number

## 示例

此示例演示如何使用现有数据计算预测的指数增长。

```javascript editor-xlsx
// How to calculate predicted exponential growth by using existing data.

// Use a function to calculate predicted exponential growth.

const worksheet = Api.GetActiveSheet();

// Configure function parameters
let data_array = [1289, 1590, 1652, 1107, 903]; 
let months_array = [1, 2, 3, 4, 5]

// Set data_array and months_array in cells
for (let i = 0; i < months_array.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(months_array[i]);
}
for (let i = 0; i < data_array.length; i++) {
  worksheet.GetRange("B" + (i + 1)).SetValue(data_array[i]);
  worksheet.GetRange("B" + (i + 1)).SetNumberFormat("$#,##0.00");
}

// Get the ranges for data_array and bins_array
let data_arrayRange = worksheet.GetRange("A1:A5");
let months_arrayRange = worksheet.GetRange("B1:B5");

// Get the worksheet function object
let func = Api.WorksheetFunction;

// Ensure the ranges are properly passed to the function
let growth = func.GROWTH(data_arrayRange, months_arrayRange);

// Print the growth result
worksheet.GetRange("D1").SetValue(growth);
```
