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

此示例设置指定字体的颜色属性。

```javascript editor-xlsx
// How to change a text color.

// Get a font object of characters and color it specifying a color in RGB format.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
let color = Api.CreateColorFromRGB(255, 111, 61);
font.SetColor(color);
```
