# GESTEP

测试数字是否大于阈值。如果数字大于或等于阈值，函数返回 1，否则返回 0。

## 语法

```javascript
expression.GESTEP(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要与步长值进行比较的值。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 阈值。 |

## 返回值

number

## 示例

检查电子表格中的数字是否大于或等于阈值。

```javascript editor-xlsx
// How do I test whether a value meets a minimum requirement in a spreadsheet?

// Get a binary result showing if one number exceeds another in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.GESTEP(-2, 2));
```
