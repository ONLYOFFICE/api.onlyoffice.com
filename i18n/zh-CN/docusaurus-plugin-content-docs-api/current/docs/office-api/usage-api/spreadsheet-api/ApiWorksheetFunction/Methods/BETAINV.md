# BETAINV

返回指定贝塔分布 (BETADIST) 的累积贝塔概率密度函数的逆函数。

## 语法

```javascript
expression.BETAINV(arg1, arg2, arg3, arg4, arg5);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 与 beta 分布相关的概率。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的 alpha 参数，必须大于 0。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的 beta 参数，必须大于 0。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | x 区间的可选下界 (A)。如果省略，则等于 0。 |
| arg5 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | x 区间的可选上界 (B)。如果省略，则等于 1。 |

## 返回值

number

## 示例

此示例演示如何返回累积 beta 概率密度函数的反函数 (BETA_DIST)。

```javascript editor-xlsx
// How to get a result from the inverse of the cumulative beta probability density function.

// Use function to get the inverse of the cumulative beta probability distribution function.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BETAINV(0.2, 4, 5));
```
