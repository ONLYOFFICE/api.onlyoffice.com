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

此示例设置指定字体的删除线属性。

```javascript editor-xlsx
// How to make a text strikethrough.

// Get a font object of characters and make it strikethrough.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetStrikethrough(true);
```
