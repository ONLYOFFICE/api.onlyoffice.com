# SetSize

设置指定字体的大小属性。
💡 此方法仅适用于单元格的文本格式。

## 语法

```javascript
expression.SetSize(Size);
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Size | 必需 | number |  | 字体大小。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置指定字体的大小属性。

```javascript editor-xlsx
// How to change the font size.

// Get a font object of characters and resize it.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSize(18);
```
