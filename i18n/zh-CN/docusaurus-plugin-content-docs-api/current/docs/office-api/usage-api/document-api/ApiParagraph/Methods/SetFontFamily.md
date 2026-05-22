# SetFontFamily

使用指定的字体系列设置所有 4 个字体槽。

## 语法

```javascript
expression.SetFontFamily(sFontFamily);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFontFamily | 必需 | string |  | 用于当前段落的字体系列。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

在文档中为段落的所有文本应用特定字体。

```javascript editor-docx
// How do I change the font family used for a paragraph's text in a document?

// Switch a paragraph to a different typeface to match a desired visual style in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font family set to 'Consolas'.");
paragraph.SetFontFamily("Consolas");
```
