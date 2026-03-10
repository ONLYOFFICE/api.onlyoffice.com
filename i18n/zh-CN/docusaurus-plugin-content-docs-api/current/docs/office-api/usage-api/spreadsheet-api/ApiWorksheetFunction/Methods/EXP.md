# EXP

返回 **e** 常数的给定数字次幂。**e** 常数等于 **2.71828182845904**，是自然对数的底数。

## 语法

```javascript
expression.EXP(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 应用于底数 **e** 的指数。 |

## 返回值

number

## 示例

此示例演示如何返回 e 常数的给定数字次幂。e 常数等于 2.71828182845904，是自然对数的底数。

```javascript editor-xlsx
// How to get the result from raising the e constant to a power.

// Use function to raise the e constant to a specified power.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EXP(5));
```
