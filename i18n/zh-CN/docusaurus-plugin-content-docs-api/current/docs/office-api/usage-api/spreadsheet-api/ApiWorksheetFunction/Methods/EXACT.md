# EXACT

检查两个文本字符串是否完全相同，并返回 **true** 或 **false**。此函数区分大小写。

## 语法

```javascript
expression.EXACT(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 第一个文本字符串。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 第二个文本字符串。 |

## 返回值

boolean

## 示例

此示例演示如何检查两个文本字符串是否完全相同，并返回 true 或 false。此函数区分大小写。

```javascript editor-xlsx
// How to compare strings.

// Use function to compare two texts (case-sensitive).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EXACT("MyPassword", "mypassword"));
```
