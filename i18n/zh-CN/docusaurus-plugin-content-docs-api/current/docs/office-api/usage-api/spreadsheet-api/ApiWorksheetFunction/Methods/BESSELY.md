# BESSELY

返回贝塞尔函数 Yn(x)。

## 语法

```javascript
expression.BESSELY(arg1, arg2);
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

此示例演示如何返回修正贝塞尔函数 Yn(x)。

```javascript editor-xlsx
// How to get a result from Bessel function Yn(x).

// Use function to get the Bessel function Yn(x).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELY(2.5, 1));
```
