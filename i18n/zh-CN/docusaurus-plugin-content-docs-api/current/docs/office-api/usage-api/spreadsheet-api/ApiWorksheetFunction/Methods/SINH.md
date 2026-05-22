# SINH

返回数字的双曲正弦值。

## 语法

```javascript
expression.SINH(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其双曲正弦值的任何实数。 |

## 返回值

number

## 示例

在电子表格中返回数字的双曲正弦值。

```javascript editor-xlsx
// Calculate the hyperbolic sine value using the SINH function.

// Apply the function to compute and display the result in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SINH(4));
```
