# ECMA_CEILING

将数字向上舍入到最接近的基数倍数。负数向零方向舍入。

## 语法

```javascript
expression.ECMA_CEILING(arg1, arg2);
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

在电子表格中将数字向上舍入到最近的指定倍数。

```javascript editor-xlsx
// How do I round numbers to the nearest increment in a spreadsheet?

// Increase values to align with a specific rounding factor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ECMA_CEILING(1.567, 0.1));
```
