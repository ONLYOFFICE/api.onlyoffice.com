# LEN

返回文本字符串中的字符数。

## 语法

```javascript
expression.LEN(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 将返回其长度的文本。空格被视为字符。 |

## 返回值

number

## 示例

计算电子表格中文本的字符数。

```javascript editor-xlsx
// How do I find out how many letters or characters are in a text string in a spreadsheet?

// Get the total character count of any text value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEN("Online Office"));
```
