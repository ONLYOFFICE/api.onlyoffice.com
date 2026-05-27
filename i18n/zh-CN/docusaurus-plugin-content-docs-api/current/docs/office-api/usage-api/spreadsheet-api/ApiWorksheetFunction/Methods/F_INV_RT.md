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

返回（右尾）F 概率分布的逆函数。

```javascript editor-xlsx
// Calculate the inverse function where p = F.DIST.RT(x,...) implies F.INV.RT(p,...) = x.

// Determine critical F values using F_INV_RT with probability and degrees of freedom.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.F_INV_RT(0.01, 6, 4));
```
