# T

检查值是否为文本，如果是则返回该文本，如果不是则返回双引号（空文本）。

## 语法

```javascript
expression.T(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | 要测试的值。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string

## 示例

此示例演示如何检查值是否为文本，如果是则返回该文本，如果不是则返回双引号（空文本）。

```javascript editor-xlsx
// How to return a text if a value is a text otherwise return an empty string.

// Use a function to check whether a cell value is a text.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.T("date and time"));
```
