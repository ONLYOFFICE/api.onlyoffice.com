# IMSQRT

返回复数的平方根。

## 语法

```javascript
expression.IMSQRT(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 以 *x + yi* 或 *x + yj* 形式表示的复数。 |

## 返回值

number

## 示例

计算电子表格中复数的平方根。

```javascript editor-xlsx
// How do I find the square root of a complex number in a spreadsheet?

// Get the square root result for complex number operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSQRT("-2+2.5i"));
```
