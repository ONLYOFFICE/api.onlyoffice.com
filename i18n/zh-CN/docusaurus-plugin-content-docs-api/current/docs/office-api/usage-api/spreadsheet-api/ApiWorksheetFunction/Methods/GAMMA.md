# GAMMA

返回伽玛函数值。

## 语法

```javascript
expression.GAMMA(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将计算伽玛函数的值。 |

## 返回值

number

## 示例

此示例演示如何返回伽玛函数值。

```javascript editor-xlsx
// How to calculate the gamma function value.

// Use a function to get the result from a gamma function value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMA(2.7);
worksheet.GetRange("B2").SetValue(ans);


```
