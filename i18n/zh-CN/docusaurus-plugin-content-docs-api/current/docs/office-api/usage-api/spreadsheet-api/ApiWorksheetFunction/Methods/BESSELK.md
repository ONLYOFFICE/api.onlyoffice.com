# BESSELK

返回修正贝塞尔函数 Kn(x)。

## 语法

```javascript
expression.BESSELK(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算函数的值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 函数的阶数。 |

## 返回值

number

## 示例

此示例演示如何返回修正贝塞尔函数 Kn(x)。

```javascript editor-xlsx
// How to get a result from Bessel function Kn(x).

// Use function to get the Bessel function Kn(x).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELK(1.5, 1));
```
