# TIMEVALUE

将文本时间转换为时间的序列号，范围从 0（上午 12:00:00）到 0.999988426（下午 11:59:59）。输入公式后使用时间格式格式化该数字。

## 语法

```javascript
expression.TIMEVALUE(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 表示某种时间格式的时间的文本字符串（字符串中的日期信息将被忽略）。 |

## 返回值

number

## 示例

此示例演示如何将文本时间转换为时间的序列号，一个从 0（上午 12:00:00）到 0.999988426（下午 11:59:59）的数字。输入公式后，使用时间格式格式化该数字。

```javascript editor-xlsx
// How to create a serial number from a date time object.

// Use a function to convert date, hours, minutes and seconds to serial numbers.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.TIMEVALUE("11/5/18 11:17:00 am"); 

worksheet.GetRange("C1").SetValue(ans);

```
