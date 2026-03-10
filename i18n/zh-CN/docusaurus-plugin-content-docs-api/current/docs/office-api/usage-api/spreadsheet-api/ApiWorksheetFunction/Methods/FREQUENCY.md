# FREQUENCY

计算值在值范围内出现的频率，然后返回返回的垂直数字数组的第一个值。

## 语法

```javascript
expression.FREQUENCY(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 将计算频率的值数组或选定区域（忽略空白和文本）。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 第一个区域中的值将被分组到的区间数组或选定区域。 |

## 返回值

number

## 示例

此示例演示如何计算值在值区域内出现的频率，然后返回返回的垂直数字数组的第一个值。

```javascript editor-xlsx
// How to get frequency of first value from a range.

// Use a function to count how often values occur within a range.

const worksheet = Api.GetActiveSheet();

// Configure function parameters
let data_array = [78, 74, 13, 17, 60]; // Historical data_array
let bins_array = [78, 56, 87, 0, 19]; // Corresponding bins_array in Excel serial number format

// Set data_array and bins_array in cells
for (let i = 0; i < data_array.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(bins_array[i])
  worksheet.GetRange("B" + (i + 1)).SetValue(data_array[i]);
}

// Get the ranges for data_array and bins_array
let data_arrayRange = worksheet.GetRange("A1:A5");
let bins_arrayRange = worksheet.GetRange("B1:B5");

// Get the worksheet function object
let func = Api.WorksheetFunction;

// Ensure the ranges are properly passed to the function
let forecast = func.FREQUENCY(data_arrayRange, bins_arrayRange);

// Print the forecast result
worksheet.GetRange("D1").SetValue(forecast);
```
