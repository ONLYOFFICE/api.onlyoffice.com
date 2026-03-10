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

此示例演示如何将以数字形式给出的小时、分钟和秒转换为序列号，并以时间格式进行格式化。

```javascript editor-xlsx
// How to create a serial number indicating hours, minutes and seconds.

// Use a function to convert hours, minutes and seconds to serial numbers.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TIME(23, 4, 39));
```
