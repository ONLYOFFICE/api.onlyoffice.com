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

读取文档中超链接的可见标签。

```javascript editor-docx
// How do I get the text that is shown for a hyperlink in a document?

// Confirm what words a reader sees when a hyperlink is rendered in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let displayedText = hyperlink.GetDisplayedText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Displayed text: " + displayedText);
doc.Push(paragraph);
```
