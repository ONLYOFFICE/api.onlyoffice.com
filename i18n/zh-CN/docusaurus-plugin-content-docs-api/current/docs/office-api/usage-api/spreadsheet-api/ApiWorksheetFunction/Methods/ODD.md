# ODD

将正数向上舍入、负数向下舍入到最接近的奇数整数。

## 语法

```javascript
expression.ODD(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要舍入的值。 |

## 返回值

number

## 示例

此示例演示如何将正数向上舍入、负数向下舍入到最接近的奇数整数。

```javascript editor-xlsx
// How to round a number the nearest odd integer.

// Use a function round a negative/positive number the nearest odd integer.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ODD(7.675));
```
