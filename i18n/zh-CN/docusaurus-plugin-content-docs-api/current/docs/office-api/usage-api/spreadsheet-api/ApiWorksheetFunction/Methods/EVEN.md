# EVEN

将正数向上舍入、负数向下舍入到最接近的偶数整数。

## 语法

```javascript
expression.EVEN(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要向上舍入的值。 |

## 返回值

number

## 示例

在电子表格中将正数向上、负数向下舍入到最接近的偶整数。

```javascript editor-xlsx
// Round numbers to the nearest even integer.

// Apply EVEN function to round positive and negative numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EVEN(15.67));
```
