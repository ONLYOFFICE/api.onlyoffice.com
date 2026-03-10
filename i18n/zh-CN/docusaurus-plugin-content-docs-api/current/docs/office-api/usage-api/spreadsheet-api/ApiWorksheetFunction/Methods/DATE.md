# DATE

返回表示日期时间代码中日期的数字。

## 语法

```javascript
expression.DATE(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 从 1900 或 1904（取决于工作簿的日期系统）到 9999 的数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示一年中月份的数字，从 1 到 12。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示一月中日期的数字，从 1 到 31。 |

## 返回值

number

## 示例

此示例演示如何返回表示日期时间代码中日期的数字。

```javascript editor-xlsx
// How to get a date.

// Use function to get the date from a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DATE(2018, 3, 16));

```
