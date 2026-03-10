# SECOND

返回秒数，从 0 到 59。

## 语法

```javascript
expression.SECOND(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 日期时间代码中的数字，或时间格式的文本（如 "16:48:00" 或 "4:48:00 PM"），或其他公式或函数的结果。 |

## 返回值

number

## 示例

此示例演示如何返回秒数，一个从 0 到 59 的数字。

```javascript editor-xlsx
// How to get seconds from time.

// Use a function to return seconds from time object.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.SECOND("16:39:35"); 

worksheet.GetRange("C1").SetValue(ans);

```
