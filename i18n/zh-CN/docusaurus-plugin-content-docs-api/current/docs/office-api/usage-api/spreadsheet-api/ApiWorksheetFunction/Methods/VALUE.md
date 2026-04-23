# VALUE

将表示数字的文本字符串转换为数字。

## 语法

```javascript
expression.VALUE(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 用引号括起来的文本或对包含将转换为数字的文本的单元格的引用。 |

## 返回值

number

## 示例

此示例演示如何将表示数字的文本字符串转换为数字。

```javascript editor-xlsx
// How to get number from a text.

// Use a function to return a number from a string.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.VALUE("$3.50"));
```
