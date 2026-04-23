# CEILING_PRECISE

返回向上舍入到最接近的整数或最接近的基数倍数的数字。无论数字的符号如何，都始终向上舍入。

## 语法

```javascript
expression.CEILING_PRECISE(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要向上舍入的值。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要向上舍入到的基数的倍数。如果省略，则使用默认值 1。如果设置为零，函数返回 0。 |

## 返回值

number

## 示例

此示例演示如何返回向上舍入到最接近的整数或最接近的基数倍数的数字。无论数字的符号如何，都始终向上舍入。

```javascript editor-xlsx
// How to round a number up precisely.

// Use function to round a negative or positive number up the nearest integer or to the nearest multiple of significance.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING_PRECISE(-6.7, 2));
```
