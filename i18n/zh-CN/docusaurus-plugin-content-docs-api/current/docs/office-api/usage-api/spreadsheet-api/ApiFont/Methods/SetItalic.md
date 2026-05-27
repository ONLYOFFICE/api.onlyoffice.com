# SetItalic

设置指定字体的斜体属性。
💡 此方法仅适用于单元格的文本格式。

## 语法

```javascript
expression.SetItalic(isItalic);
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | 必需 | boolean |  | 指定文本字符以斜体显示。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为选定的文本字符应用斜体格式。

```javascript editor-xlsx
// How do I make specific characters appear in italics in a spreadsheet?

// Slant a portion of cell text by enabling the italic style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetItalic(true);
```
