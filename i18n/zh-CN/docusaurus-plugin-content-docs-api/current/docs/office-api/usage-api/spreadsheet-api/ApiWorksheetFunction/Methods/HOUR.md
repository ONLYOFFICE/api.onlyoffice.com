# HOUR

返回小时数，从 0（上午 12:00）到 23（下午 11:00）。

## 语法

```javascript
expression.HOUR(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 日期时间代码中的数字，或时间格式的文本（如 “16:48:00” 或 “4:48:00 PM”），或其他公式或函数的结果。 |

## 返回值

number

## 示例

从电子表格中的时间值提取小时。

```javascript editor-xlsx
// How do I get the hour component from a time in a spreadsheet?

// Return the hour portion of a time as a number from 0 to 23 in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.HOUR("4:17 pm"); 

worksheet.GetRange("C1").SetValue(ans);
```
