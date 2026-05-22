# SetUnderline

为当前字体设置请求中指定类型的下划线。
💡 此方法仅适用于单元格的文本格式。

## 语法

```javascript
expression.SetUnderline(Underline);
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Underline | 必需 | [XlUnderlineStyle](../../Enumeration/XlUnderlineStyle.md) |  | 下划线类型。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为选定的文本字符应用下划线样式。

```javascript editor-xlsx
// How do I add underlining to part of the text in a spreadsheet?

// Decorate a run of characters with a chosen underline style in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
const characters = range.GetCharacters(9, 4);
const font = characters.GetFont();
font.SetUnderline("xlUnderlineStyleSingle");
```
