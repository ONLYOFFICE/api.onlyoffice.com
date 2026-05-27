# ISFORMULA

检查单元格引用是否包含公式，并返回 **true** 或 **false**。

## 语法

```javascript
expression.ISFORMULA(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 要测试的单元格区域。此参数可以是区域或区域名称。 |

## 返回值

boolean

## 示例

检测电子表格中的单元格是否包含公式。

```javascript editor-xlsx
// How do I find out if a cell has a formula in a spreadsheet?

// Use a function to identify cells with formulas versus static values in a spreadsheet.

const worksheet = Api.GetActiveSheet();

// Set the formula in cell B3
worksheet.GetRange("B3").SetValue("=SUM(5, 6)");

// Check if there is a formula in C3
let func = Api.WorksheetFunction;
let result = func.ISFORMULA(worksheet.GetRange("B3"));
worksheet.GetRange("C3").SetValue(result);
```
