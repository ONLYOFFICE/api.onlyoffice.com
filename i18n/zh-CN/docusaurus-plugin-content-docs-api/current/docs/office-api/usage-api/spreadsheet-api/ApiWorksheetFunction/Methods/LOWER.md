# LOWER

将文本字符串中的所有字母转换为小写。

## 语法

```javascript
expression.LOWER(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要转换为小写的文本。非字母的文本字符不会更改。 |

## 返回值

string

## 示例

此示例演示如何将文本字符串中的所有字母转换为小写。

```javascript editor-xlsx
// How to make all characters uncapitalized.

// Use a function to make a text string to lowercase.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOWER("Day"));

```
