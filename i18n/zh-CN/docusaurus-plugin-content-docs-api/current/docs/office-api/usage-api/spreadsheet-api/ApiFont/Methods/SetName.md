# SetName

设置指定字体的名称属性。
💡 此方法仅适用于单元格的文本格式。

## 语法

```javascript
expression.SetName(FontName);
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| FontName | 必需 | string |  | 字体名称。 |

## 返回值

此方法不返回任何数据。

## 示例

更改电子表格中特定文本字符使用的字体。

```javascript editor-xlsx
// How do I assign a different font family to part of the text in a spreadsheet?

// Switch selected characters to a named typeface and confirm the change in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetName("Font 1");
let fontName = font.GetName();
worksheet.GetRange("B3").SetValue("Font name: " + fontName);
```
