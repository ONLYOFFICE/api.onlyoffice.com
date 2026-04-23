# WEEKDAY

返回 1 到 7 之间的数字，标识指定日期是星期几。

## 语法

```javascript
expression.WEEKDAY(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示日期的数字，或其他公式或函数的结果。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 确定返回值类型的数字：**1** - 返回从 1（星期日）到 7（星期六）的数字；**2** - 返回从 1（星期一）到 7（星期日）的数字；**3** - 返回从 0（星期一）到 6（星期日）的数字。 |

## 返回值

number

## 示例

此示例演示如何返回从 1 到 7 的数字，以标识指定日期是星期几。

```javascript editor-xlsx
// How to return a weekday.

// Use a function to get a weekday using numbers.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.WEEKDAY("11/5/2018", 2); 

worksheet.GetRange("C1").SetValue(ans);

```
