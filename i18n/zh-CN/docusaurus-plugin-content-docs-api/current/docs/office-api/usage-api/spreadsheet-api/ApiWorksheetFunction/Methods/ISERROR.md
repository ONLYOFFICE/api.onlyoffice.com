# ISERROR

检查值是否为错误，并返回 **true** 或 **false**。

## 语法

```javascript
expression.ISERROR(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 要测试的值。值可以是空单元格、错误、逻辑值、文本、数字、区域或区域名称。 |

## 返回值

boolean

## 示例

此示例演示如何检查值是否为错误，并返回 true 或 false。

```javascript editor-xlsx
// How to check if the cell contains an error.

// Use a function to check whether the value is error or not.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("B3").SetValue("#N/A")
let result = func.ISERR("B3");
worksheet.GetRange("C3").SetValue(result)

```
