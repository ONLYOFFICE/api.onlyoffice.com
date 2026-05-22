# SetColor

设置指定字体的颜色属性。
💡 此方法仅适用于单元格的文本格式。

## 语法

```javascript
expression.SetColor(Color);
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 字体颜色。 |

## 返回值

此方法不返回任何数据。

## 示例

更改电子表格中单元格内特定文本字符的颜色。

```javascript editor-xlsx
// How do I apply a custom color to part of the text inside a cell in a spreadsheet?

// Paint a selected run of characters with an RGB color value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
let color = Api.CreateColorFromRGB(255, 111, 61);
font.SetColor(color);
```
