# MONTH

返回月份数，从 1（一月）到 12（十二月）。

## 语法

```javascript
expression.MONTH(arg1-);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1- | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 日期时间代码中的数字。 |

## 返回值

number

## 示例

从电子表格中的日期提取月份。

```javascript editor-xlsx
// What month does a date represent in a spreadsheet?

// Get the month as a number from a date in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.MONTH("3/16/2018"); 

worksheet.GetRange("C1").SetValue(ans);
```
