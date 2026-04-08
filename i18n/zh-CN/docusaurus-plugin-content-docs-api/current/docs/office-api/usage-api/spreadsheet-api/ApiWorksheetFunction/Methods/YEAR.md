# YEAR

返回日期的年份，范围为 1900-9999 的整数。

## 语法

```javascript
expression.YEAR(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 日期时间代码中的数字，或其他公式或函数的结果。 |

## 返回值

number

## 示例

此示例演示如何返回日期的年份，一个在 1900-9999 范围内的整数。

```javascript editor-xlsx
// How to return the year of a date.

// Use a function to get a year from a date object.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.YEAR("3/16/2018");

worksheet.GetRange("C1").SetValue(ans);

```
