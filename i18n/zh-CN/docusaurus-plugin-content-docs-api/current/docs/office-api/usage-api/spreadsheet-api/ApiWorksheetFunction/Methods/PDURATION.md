# PDURATION

返回投资达到指定值所需的期数。

## 语法

```javascript
expression.PDURATION(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每期的利率。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 投资的现值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 投资的预期未来值。 |

## 返回值

number

## 示例

此示例演示如何返回投资达到指定值所需的期数。

```javascript editor-xlsx
// How to get periods required to get a value of an investment.

// Use a function to get the number of periods required by an investment to reach a specified value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PDURATION("2.50%", 2000, 2200));
```
