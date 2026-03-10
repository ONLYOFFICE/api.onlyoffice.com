# SetFontFamily

使用指定的字体系列设置所有 4 个字体槽。

## 语法

```javascript
expression.SetFontFamily(sFontFamily);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFontFamily | 必需 | string |  | 用于当前文本运行的字体系列。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例使用指定的字体系列设置所有 4 个字体槽。

```javascript editor-docx
// How to change the text font family.

// Create a text run object and set the "Comic Sans MS" font faminy to it.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontFamily("Comic Sans MS");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font family set to 'Comic Sans MS' using the text properties.");
```
