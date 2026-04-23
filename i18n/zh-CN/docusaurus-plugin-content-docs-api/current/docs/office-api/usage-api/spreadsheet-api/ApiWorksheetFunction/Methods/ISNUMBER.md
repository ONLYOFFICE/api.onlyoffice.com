# ISNUMBER

检查值是否为数字，并返回 **true** 或 **false**。

## 语法

```javascript
expression.ISNUMBER(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | 要测试的值。值可以是空单元格、错误、逻辑值、文本、数字、区域或区域名称。 |

## 返回值

boolean

## 示例

此示例演示如何检查值是否为数字，并返回 true 或 false。

```javascript editor-xlsx
// How to check if the cell contains a number.

// Use a function to check whether a range data is a numerical value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISNUMBER("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNUMBER(255));
worksheet.GetRange("A3").SetValue(func.ISNUMBER("Online Office"));
```
