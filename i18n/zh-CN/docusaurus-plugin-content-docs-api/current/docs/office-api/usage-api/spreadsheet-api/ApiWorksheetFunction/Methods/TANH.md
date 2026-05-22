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

在电子表格中返回数字的双曲正切值。

```javascript editor-xlsx
// Calculate the hyperbolic tangent of a number using the TANH function.

// Returns the hyperbolic tangent value of the specified number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TANH(6));
```
