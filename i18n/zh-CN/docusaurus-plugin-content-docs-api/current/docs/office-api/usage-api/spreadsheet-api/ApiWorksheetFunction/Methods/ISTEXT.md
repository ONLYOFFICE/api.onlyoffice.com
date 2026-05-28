# ISTEXT

检查值是否为文本，并返回 **true** 或 **false**。

## 语法

```javascript
expression.ISTEXT(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | 要测试的值。该值可以是空单元格、错误、逻辑值、文本、数字、区域或区域名称。 |

## 返回值

boolean

## 示例

确定电子表格中的单元格是否包含文本。

```javascript editor-xlsx
// How do I check if a cell holds text rather than numbers in a spreadsheet?

// Use a function to filter text values from numeric and empty cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISTEXT(255));
worksheet.GetRange("A2").SetValue(func.ISTEXT("#N/A"));
worksheet.GetRange("A3").SetValue(func.ISTEXT("Online Office"));
```
