# CEILING

将数字向上舍入到最接近的基数倍数。

## 语法

```javascript
expression.CEILING(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要向上舍入的值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要向上舍入到的基数的倍数。 |

## 返回值

number

## 示例

此示例演示如何将数字向上舍入到最接近的基数倍数。

```javascript editor-xlsx
// How to round a number up.

// Use function to round a number up the nearest integer or to the nearest multiple of significance.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING(1.23, 0.1));
```
