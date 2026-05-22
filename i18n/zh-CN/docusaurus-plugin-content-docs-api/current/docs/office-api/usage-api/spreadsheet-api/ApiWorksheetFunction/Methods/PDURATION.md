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

计算电子表格中投资达到目标金额所需的期数。

```javascript editor-xlsx
// How do I find the time required for an investment to grow to a specific value in a spreadsheet?

// Determine the number of investment periods until a desired return is achieved in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PDURATION("2.50%", 2000, 2200));
```
