# TIME

将以数字给出的小时、分钟和秒转换为序列号，并以时间格式格式化。

## 语法

```javascript
expression.TIME(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示小时的数字，从 0 到 23。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示分钟的数字，从 0 到 59。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示秒的数字，从 0 到 59。 |

## 返回值

number

## 示例

在电子表格中将以数字给出的小时、分钟和秒转换为序列号，并以时间格式格式化。

```javascript editor-xlsx
// Create a serial number from time components for use in spreadsheet calculations.

// Apply the TIME function with hour, minute, and second parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TIME(23, 4, 39));
```
