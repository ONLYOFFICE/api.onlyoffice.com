# DAY

返回以数字格式给出的日期中的天数，从 1 到 31。

## 语法

```javascript
expression.DAY(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 日期时间代码中的数字。 |

## 返回值

number

## 示例

在电子表格中以数字格式返回日期的天数，1 到 31 的数字。

```javascript editor-xlsx
// How to get a day from a date in a spreadsheet.

// Use function to get day from provided date in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DAY("2018/3/16"); 

worksheet.GetRange("C1").SetValue(ans);
```
