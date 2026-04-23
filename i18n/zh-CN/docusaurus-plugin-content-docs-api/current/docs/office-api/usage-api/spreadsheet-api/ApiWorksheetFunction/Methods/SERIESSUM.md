# SERIESSUM

基于公式返回幂级数的和。

## 语法

```javascript
expression.SERIESSUM(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 幂级数的输入值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | x 将被提升到的初始幂次。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 级数中每项 n 增加的步长。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | x 的每个连续幂次所乘以的一组系数。 |

## 返回值

number

## 示例

此示例演示如何根据公式返回幂级数的和。

```javascript editor-xlsx
// How to calculate the sum of a power series.

// Use a function to sum up a power series using a formula.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SERIESSUM(5, 2, 1, 3));
```
