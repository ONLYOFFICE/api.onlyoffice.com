# TANH

返回数字的双曲正切值。

## 语法

```javascript
expression.TANH(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其双曲正切值的任何实数。 |

## 返回值

number

## 示例

此示例演示如何返回数字的双曲正切。

```javascript editor-xlsx
// How to return the hyperbolic tangent of a number.

// Use a function to calculate angle's hyperbolic tangent.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TANH(6));
```
