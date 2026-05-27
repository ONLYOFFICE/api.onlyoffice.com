# LN

返回数字的自然对数。

## 语法

```javascript
expression.LN(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其自然对数的正实数。 |

## 返回值

number

## 示例

计算电子表格中数字的自然对数。

```javascript editor-xlsx
// How do I find the natural logarithm (base e) of a value in a spreadsheet?

// Get the inverse exponential of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LN(23));
```
