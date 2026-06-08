# ISLOGICAL

检查值是否为逻辑值（**true** 或 **false**），并返回 **true** 或 **false**。

## 语法

```javascript
expression.ISLOGICAL(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | 要测试的值。该值可以是空单元格、错误、逻辑值、文本、数字、区域或区域名称。 |

## 返回值

boolean

## 示例

测试电子表格中的单元格是否包含逻辑值（true 或 false）。

```javascript editor-xlsx
// How do I determine if a cell holds a boolean value in a spreadsheet?

// Use a function to distinguish between logical values and other data types in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange("B3").SetValue("66");

let func = Api.WorksheetFunction;
let result = func.ISLOGICAL(worksheet.GetRange("B3"));
worksheet.GetRange("C3").SetValue(result);
```
