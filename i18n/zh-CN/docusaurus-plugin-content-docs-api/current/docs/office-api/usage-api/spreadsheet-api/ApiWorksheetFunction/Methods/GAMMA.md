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

返回伽马函数值。

```javascript editor-xlsx
// Calculate the gamma function for the given parameter value.

// Determine gamma function result using GAMMA with numeric input.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMA(2.7);
worksheet.GetRange("B2").SetValue(ans);
```
