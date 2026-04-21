# GAMMAINV

返回伽玛累积分布的逆函数：如果 p = GAMMADIST(x,...)，则 GAMMAINV(p,...) = x。

## 语法

```javascript
expression.GAMMAINV(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 与伽玛分布相关的概率，一个介于 0 和 1 之间（含 0 和 1）的数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的 alpha 参数，一个正数。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的 beta 参数，一个正数。如果此参数等于 1，则函数返回标准伽玛分布。 |

## 返回值

number

## 示例

在电子表格中返回 Gamma 累积分布的逆函数：若 p = GAMMADIST(x,...)，则 GAMMAINV(p,...) = x。

```javascript editor-xlsx
// How to calculate the inverse of the gamma cumulative distribution in a spreadsheet.

// Use a function to get the inverse of the gamma cumulative distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMAINV(0.4, 9, 2);
worksheet.GetRange("B2").SetValue(ans);
```
