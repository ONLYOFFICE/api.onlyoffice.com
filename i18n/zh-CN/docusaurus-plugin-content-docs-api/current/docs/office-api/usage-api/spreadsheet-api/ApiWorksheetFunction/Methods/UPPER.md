# UPPER

将文本字符串转换为全部大写字母。

## 语法

```javascript
expression.UPPER(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 将转换为大写的文本，可以是引用或文本字符串。 |

## 返回值

string

## 示例

此示例演示如何将文本字符串转换为全部大写字母。

```javascript editor-xlsx
// How to make a string characters uppercase.

// Use a function to convert all letters to uppercase.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UPPER("Online Office"));
```
