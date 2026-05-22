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

在电子表格中将数字舍入到最近的奇数整数。

```javascript editor-xlsx
// How do I round a value to the nearest odd number in a spreadsheet?

// Find the closest odd integer above or below a given number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ODD(7.675));
```
