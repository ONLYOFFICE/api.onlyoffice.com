# ASINH

返回数字的反双曲正弦值。

## 语法

```javascript
expression.ASINH(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 任何大于或等于 1 的实数。 |

## 返回值

number

## 示例

计算电子表格中数字的反双曲正弦。

```javascript editor-xlsx
// Apply the ASINH function for hyperbolic calculations in a spreadsheet.

// Obtain the inverse hyperbolic sine result for mathematical operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASINH(4));
```
