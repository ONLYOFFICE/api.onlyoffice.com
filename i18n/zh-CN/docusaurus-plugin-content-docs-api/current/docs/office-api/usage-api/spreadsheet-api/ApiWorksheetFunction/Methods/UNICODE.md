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

在电子表格中返回与文本第一个字符对应的数字（码位）。

```javascript editor-xlsx
// The UNICODE function converts characters to their numeric Unicode values.

// Apply the function to obtain a character's code point from text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UNICODE("example"));
```
