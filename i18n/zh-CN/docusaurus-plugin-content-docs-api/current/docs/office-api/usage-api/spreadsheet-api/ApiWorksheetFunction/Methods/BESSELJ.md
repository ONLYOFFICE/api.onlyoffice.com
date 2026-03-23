# BESSELJ

返回贝塞尔函数 Jn(x)。

## 语法

```javascript
expression.BESSELJ(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算函数的值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 贝塞尔函数的阶数。 |

## 返回值

number

## 示例

此示例演示如何返回贝塞尔函数 Jn(x)。

```javascript editor-xlsx
// How to get a result from Bessel function Jn(x).

// Use function to get the Bessel function Jn(x).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELJ(1.9, 2));
```
