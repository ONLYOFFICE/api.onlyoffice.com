# LOG10

返回数字的以 10 为底的对数。

## 语法

```javascript
expression.LOG10(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其以 10 为底的对数的正实数。 |

## 返回值

number

## 示例

计算电子表格中数字的以 10 为底的对数。

```javascript editor-xlsx
// How do I find the logarithm with base 10 in a spreadsheet?

// Get the common logarithm value of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOG10(56));
```
