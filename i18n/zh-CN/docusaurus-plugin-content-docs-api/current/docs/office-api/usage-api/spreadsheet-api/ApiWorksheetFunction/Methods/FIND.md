# FIND

返回一个文本字符串在另一个文本字符串中的起始位置。此函数区分大小写。

## 语法

```javascript
expression.FIND(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要查找的文本。使用双引号（空文本）匹配搜索字符串中的第一个字符。不允许使用通配符。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 包含要查找文本的文本。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 指定开始搜索的字符位置。搜索字符串中的第一个字符编号为 1。如果省略，此参数等于 1。 |

## 返回值

number

## 示例

在电子表格中查找子字符串在文本中的位置。

```javascript editor-xlsx
// How do I search for specific text inside a larger text string in a spreadsheet?

// Locate where one piece of text begins within another in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FIND("line", "Online Office"));
```
