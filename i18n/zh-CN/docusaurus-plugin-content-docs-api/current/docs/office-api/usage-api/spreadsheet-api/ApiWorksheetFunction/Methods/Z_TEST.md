# Z_TEST

返回 z 检验的单尾 P 值。

## 语法

```javascript
expression.Z_TEST(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | number[] \| [ApiRange](../../ApiRange/ApiRange.md) |  | 用于检验 X 的数据数组或区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要测试的值。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 总体（已知）标准差。如果省略，则使用样本标准差。 |

## 返回值

number

## 示例

此示例演示如何返回 z 检验的单尾 P 值。

```javascript editor-xlsx
// How to return one-tailed P-value.

// Use a function to get one-tailed P-value.


let worksheet = Api.GetActiveSheet();
let argumentsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// Place the numbers in cells
for (let i = 0; i < argumentsArr.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(argumentsArr[i]);
}

// Get values from the range
let data = worksheet.GetRange("A1:A16");

// Calculate the TRIMMEAN of the range A1:A16
let func = Api.WorksheetFunction;
let result = func.Z_TEST(data, 4);
worksheet.GetRange("B1").SetValue(result);
```
