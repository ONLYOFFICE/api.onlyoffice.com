# IMSINH

返回复数的双曲正弦值。

## 语法

```javascript
expression.IMSINH(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 以 *x + yi* 或 *x + yj* 形式表示的复数。 |

## 返回值

number

## 示例

计算电子表格中复数的双曲正弦。

```javascript editor-xlsx
// How do I find the hyperbolic sine value of a complex number in a spreadsheet?

// Get the hyperbolic sine result for complex number calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSINH("-2+2.5i"));
```
