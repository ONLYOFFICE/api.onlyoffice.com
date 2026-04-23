# GetTextPr

返回当前样式的文本属性。

## 语法

```javascript
expression.GetTextPr();
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例展示如何获取当前样式的文本属性。

```javascript editor-docx
// How to update text properties.

// Get the default style text properties of the paragraph.

let doc = Api.GetDocument();
let normalStyle = doc.GetDefaultStyle("paragraph");
let textPr = normalStyle.GetTextPr();
textPr.SetColor(Api.HexColor('#262626'));
textPr.SetFontFamily("Calibri Light");
textPr.SetFontSize(32);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text color, font family and font size set using the text style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide text styles are applied.");
```
