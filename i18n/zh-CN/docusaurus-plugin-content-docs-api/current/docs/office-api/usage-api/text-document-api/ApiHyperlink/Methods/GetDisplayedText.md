# GetDisplayedText

返回超链接显示文本。

## 语法

```javascript
expression.GetDisplayedText();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取超链接显示文本。

```javascript editor-docx
// How to show the display text of the hyperlink in the document.

// Add a hyperlink to the paragraph and get its visible text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let displayedText = hyperlink.GetDisplayedText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Displayed text: " + displayedText);
doc.Push(paragraph);
```
