# GAMMALN

返回伽玛函数的自然对数。

## 语法

```javascript
expression.GAMMALN(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将计算伽玛函数自然对数的值，一个正数。 |

## 返回值

number

## 示例

计算电子表格中伽马函数值的自然对数。

```javascript editor-xlsx
// How do I find the natural logarithm of a gamma function in a spreadsheet?

// Get the logarithmic equivalent of a gamma function result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMALN(0.5);
worksheet.GetRange("B2").SetValue(ans);
```
