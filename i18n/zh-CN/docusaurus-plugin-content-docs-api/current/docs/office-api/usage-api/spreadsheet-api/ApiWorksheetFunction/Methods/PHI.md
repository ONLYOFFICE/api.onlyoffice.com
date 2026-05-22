# PHI

返回标准正态分布的密度函数值。

## 语法

```javascript
expression.PHI(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其标准正态分布密度的数字。 |

## 返回值

number

## 示例

计算电子表格中正态分布曲线在特定点的高度。

```javascript editor-xlsx
// How do I get the probability density value for a standard normal distribution in a spreadsheet?

// Find how likely a value is within a bell curve distribution in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//method params
let number = 5;

worksheet.GetRange("A1").SetValue(number);

let func = Api.WorksheetFunction;
let ans = func.PHI(number);

worksheet.GetRange("C1").SetValue(ans);
```
