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

在电子表格中将文本时间转换为时间序列号，从 0 (12:00:00 AM) 到 0.999988426 (11:59:59 PM)。输入公式后以时间格式格式化数字。

```javascript editor-xlsx
// Parse a text string representing a time and convert it to a serial number.

// Apply the TIMEVALUE function with a time string in date and time format.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.TIMEVALUE("11/5/18 11:17:00 am"); 

worksheet.GetRange("C1").SetValue(ans);
```
