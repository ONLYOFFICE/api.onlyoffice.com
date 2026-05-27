# SetStrikethrough

设置指定字体的删除线属性。
💡 此方法仅适用于单元格的文本格式。

## 语法

```javascript
expression.SetStrikethrough(isStrikethrough);
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikethrough | 必需 | boolean |  | 指定文本字符以删除线显示。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为选定的文本字符绘制删除线。

```javascript editor-xlsx
// How do I add a strikethrough effect to part of the text in a spreadsheet?

// Mark a run of characters as crossed out to indicate deleted content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetStrikethrough(true);
```
