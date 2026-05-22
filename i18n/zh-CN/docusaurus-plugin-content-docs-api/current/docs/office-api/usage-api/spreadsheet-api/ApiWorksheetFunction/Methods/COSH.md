# COSH

返回数字的双曲余弦值。

## 语法

```javascript
expression.COSH(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其双曲余弦值的任何实数。 |

## 返回值

number

## 示例

计算电子表格中某值的双曲余弦。

```javascript editor-xlsx
// What is the hyperbolic cosine result of a number in a spreadsheet?

// Calculate the exponential curve ratio for a given value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COSH(3));
```
