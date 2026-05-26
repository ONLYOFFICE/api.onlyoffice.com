# LOG

返回数字以指定底数的对数。

## 语法

```javascript
expression.LOG(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其对数的正实数。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 对数的底数。如果省略，则等于 10。 |

## 返回值

number

## 示例

使用自定义底数计算电子表格中数字的对数。

```javascript editor-xlsx
// How do I find the logarithm with a base other than 10 or e in a spreadsheet?

// Get the logarithmic value of a number to any specified base in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOG(56, 5));
```
