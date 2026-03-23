# GAUSS

计算标准正态总体成员落在平均值和距平均值 arg1 个标准偏差之间的概率。

## 语法

```javascript
expression.GAUSS(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将计算分布的值。 |

## 返回值

number

## 示例

此示例演示如何计算标准正态总体成员落在平均值和距平均值 arg1 个标准差之间的概率。

```javascript editor-xlsx
// How to calculate the probability that a member of a standard normal population will fall between two values.

// Use a function to calculate the probability.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAUSS(2);
worksheet.GetRange("B2").SetValue(ans);
```
