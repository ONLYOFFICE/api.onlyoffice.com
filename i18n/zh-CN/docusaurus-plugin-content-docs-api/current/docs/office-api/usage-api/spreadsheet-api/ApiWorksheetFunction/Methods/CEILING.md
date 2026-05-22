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

在电子表格中将数字向上舍入到最近的增量。

```javascript editor-xlsx
// What is the next whole value above a decimal in a spreadsheet?

// Force rounding upward to meet a specific interval in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING(1.23, 0.1));
```
