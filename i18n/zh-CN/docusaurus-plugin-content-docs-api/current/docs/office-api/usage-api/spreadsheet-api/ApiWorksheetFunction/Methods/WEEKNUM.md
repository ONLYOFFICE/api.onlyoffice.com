# WEEKNUM

返回年份中的周数。

## 语法

```javascript
expression.WEEKNUM(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于日期和时间计算的日期时间代码。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 确定返回值类型的数字（1 或 2）：星期日 (1) 或星期一 (2)。 |

## 返回值

number

## 示例

此示例演示如何返回从 1 到 7 的数字，以标识指定日期是星期几。

```javascript editor-xlsx
// How to return a weekday.

// Use a function to get a weekday using numbers.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.WEEKNUM("11/5/2018", 2); 

worksheet.GetRange("C1").SetValue(ans);

```
