# UNICODE

返回对应于文本第一个字符的数字（码位）。

## 语法

```javascript
expression.UNICODE(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 将返回其 Unicode 值的字符。 |

## 返回值

number

## 示例

此示例演示如何返回与文本第一个字符对应的编号（码位）。

```javascript editor-xlsx
// How to get a Unicode of a character.

// Use a function to return the character's Unicode.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UNICODE("example"));
```
