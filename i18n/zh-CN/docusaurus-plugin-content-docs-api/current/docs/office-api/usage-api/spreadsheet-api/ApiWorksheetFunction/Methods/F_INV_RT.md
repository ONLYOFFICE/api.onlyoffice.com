# F_INV_RT

返回（右尾）F 概率分布的逆函数：如果 p = F.DIST.RT(x,...)，则 F.INV.RT(p,...) = x。

## 语法

```javascript
expression.F_INV_RT(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 与 F 累积分布相关的概率，一个介于 0 和 1 之间（含 0 和 1）的数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分子自由度，一个介于 1 和 10^10 之间的数字，不包括 10^10。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分母自由度，一个介于 1 和 10^10 之间的数字，不包括 10^10。 |

## 返回值

number

## 示例

此示例演示如何返回（右尾）F 概率分布的反函数：如果 p = F.DIST.RT(x,...)，则 F.INV.RT(p,...) = x。

```javascript editor-xlsx
// How to get the inverse of the (right-tailed) F probability distribution.

// Use function to calculate an inverse of the F probability distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.F_INV_RT(0.01, 6, 4));
```
