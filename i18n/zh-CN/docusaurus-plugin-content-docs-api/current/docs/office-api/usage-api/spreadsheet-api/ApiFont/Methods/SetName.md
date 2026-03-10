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

此示例设置指定字体的名称属性。

```javascript editor-xlsx
// How to change name of a font.

// Get a font object of characters and set a new name for it.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetName("Font 1");
let fontName = font.GetName();
worksheet.GetRange("B3").SetValue("Font name: " + fontName);
```
