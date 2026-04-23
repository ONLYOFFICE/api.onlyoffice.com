# GAMMALN_PRECISE

返回伽玛函数的自然对数。

## 语法

```javascript
expression.GAMMALN_PRECISE(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将计算伽玛函数自然对数的值，一个正数。 |

## 返回值

number

## 示例

此示例演示如何返回伽玛函数的自然对数。

```javascript editor-xlsx
// How to calculate the natural logarithm of the gamma function.

// Use a function to calculate the natural logarithm of the gamma function value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMALN_PRECISE(0.5);
worksheet.GetRange("B2").SetValue(ans);


```
