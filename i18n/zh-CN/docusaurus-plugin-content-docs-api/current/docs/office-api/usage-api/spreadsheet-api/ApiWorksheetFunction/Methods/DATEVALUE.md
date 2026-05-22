# DATEVALUE

将文本形式的日期转换为表示日期时间代码中日期的数字。

## 语法

```javascript
expression.DATEVALUE(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 表示日期的文本，介于 1/1/1900 或 1/1/1904（取决于工作簿的日期系统）和 12/31/9999 之间。 |

## 返回值

number

## 示例

在电子表格中将文本日期字符串转换为日期数字。

```javascript editor-xlsx
// What date value does a text string represent in a spreadsheet?

// Parse text into a usable date format in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DATEVALUE("2018-3-16"); 

worksheet.GetRange("C1").SetValue(ans);
```
