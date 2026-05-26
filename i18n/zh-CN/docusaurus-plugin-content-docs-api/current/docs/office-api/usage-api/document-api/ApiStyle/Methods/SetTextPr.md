# SetTextPr

设置当前样式的文本属性。

## 语法

```javascript
expression.SetTextPr(textPr);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将要设置的文本属性。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

在样式中存储字体大小和字重设置，以便使用该样式的所有文本在文档中看起来统一。

```javascript editor-docx
// How do I make every paragraph use the same font size and bold setting by updating a shared style in a document?

// Control the appearance of all body text at once by embedding character formatting in the default style in a document.

let doc = Api.GetDocument();
let normalStyle = doc.GetDefaultStyle("paragraph");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
normalStyle.SetTextPr(textPr);

let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text color, font family and font size set using the text style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide text styles are applied.");
```
