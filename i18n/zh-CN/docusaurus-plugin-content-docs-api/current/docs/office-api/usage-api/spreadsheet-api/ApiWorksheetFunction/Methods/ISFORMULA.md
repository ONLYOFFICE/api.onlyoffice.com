# ISFORMULA

检查对单元格的引用是否包含公式，并返回 **true** 或 **false**。

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

此示例演示如何检查对单元格的引用是否包含公式，并返回 true 或 false。

```javascript editor-xlsx
// How to check if the cell contains formula or not.

// Use a function to check whether a range data is a formula or not.

const worksheet = Api.GetActiveSheet();

// Set the formula in cell B3
worksheet.GetRange("B3").SetValue("=SUM(5, 6)");

// Check if there is a formula in C3
let func = Api.WorksheetFunction;
let result = func.ISFORMULA(worksheet.GetRange("B3"));
worksheet.GetRange("C3").SetValue(result);
```
