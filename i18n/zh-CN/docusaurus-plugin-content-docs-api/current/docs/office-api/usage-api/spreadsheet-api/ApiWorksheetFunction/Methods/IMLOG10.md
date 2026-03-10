# IMLOG10

返回复数的以 10 为底的对数。

## 语法

```javascript
expression.IMLOG10(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 以 *x + yi* 或 *x + yj* 形式表示的复数。 |

## 返回值

number

## 示例

此示例演示如何返回复数的以 10 为底的对数。

```javascript editor-xlsx
// How to get the logarithm of base 10 of a comlex numbers.

// Use a function to get the base 10 logarithm.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMLOG10("-2+2.5i"));
```
