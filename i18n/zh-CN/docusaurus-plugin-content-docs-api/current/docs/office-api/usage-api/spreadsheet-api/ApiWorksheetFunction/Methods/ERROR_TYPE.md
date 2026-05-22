# ERROR_TYPE

返回与错误值匹配的数字。

## 语法

```javascript
expression.ERROR_TYPE(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ErrorValue](../../Enumeration/ErrorValue.md) \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 将返回其标识号的错误值。可以是实际错误值或对包含错误值的单元格的引用。 |

## 返回值

number

## 示例

在电子表格中返回与错误值匹配的数字。

```javascript editor-xlsx
// Get the error type code from the value.

// Identify error types using ERROR_TYPE function in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let nonPositiveNum = 0;
let logResult = func.LOG(nonPositiveNum);
worksheet.GetRange("B3").SetValue(logResult);
worksheet.GetRange("C3").SetValue(func.ERROR_TYPE(logResult));
```
