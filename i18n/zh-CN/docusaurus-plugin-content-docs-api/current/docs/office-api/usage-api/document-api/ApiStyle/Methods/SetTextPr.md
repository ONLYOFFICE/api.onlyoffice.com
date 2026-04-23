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

此示例将文本设置应用于指定的样式。

```javascript editor-docx
// Creates a paragraph, adds a text to it, and sets the font size and bold property to this text.

// Specifies the ApiTextPr object and applies its settings to the ApiStyle object.

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
