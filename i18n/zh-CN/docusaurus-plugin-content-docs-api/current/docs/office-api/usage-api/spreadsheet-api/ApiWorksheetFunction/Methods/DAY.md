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

此示例演示如何返回以数字格式给出的日期中的日，一个从 1 到 31 的数字。

```javascript editor-xlsx
// How to get a day from a date.

// Use function to get day from provided date.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DAY("2018/3/16"); 

worksheet.GetRange("C1").SetValue(ans);

```
