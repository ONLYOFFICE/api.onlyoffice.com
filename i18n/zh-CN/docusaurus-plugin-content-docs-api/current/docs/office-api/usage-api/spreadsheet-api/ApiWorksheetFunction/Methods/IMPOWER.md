# IMPOWER

返回复数的整数次幂。

## 语法

```javascript
expression.IMPOWER(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 以 *x + yi* 或 *x + yj* 形式表示的复数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 复数将被提升到的幂次。 |

## 返回值

number

## 示例

此示例演示如何返回复数的整数幂。

```javascript editor-xlsx
// How to get the result from raising into power of a complex number.

// Use a function to get the result from the power.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMPOWER("-2+2.5i", -3));
```
