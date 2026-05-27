# SetTextPr

将文本设置应用于内容控件的内容。

## 语法

```javascript
expression.SetTextPr(textPr);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将设置到内容控件内容的属性。 |

## 返回值

boolean

## 示例

在文档中为内容控件内的文本应用字体大小和粗体格式。

```javascript editor-docx
// How do I change the font style of text inside a content control in a document?

// Style the text of a content control with a larger font and bold weight in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the font size set to 30 and the font weight set to bold.");
doc.AddElement(0, blockLvlSdt);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
blockLvlSdt.SetTextPr(textPr);
```
