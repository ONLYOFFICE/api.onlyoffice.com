# GetLinkedText

返回超链接地址。

## 语法

```javascript
expression.GetLinkedText();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中超链接存储的 URL 地址。

```javascript editor-docx
// How do I get the destination URL of a hyperlink in a document?

// Retrieve the updated link target after changing the hyperlink address in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetLink("https://api.onlyoffice.com/");
let linkedText = hyperlink.GetLinkedText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Linked text: " + linkedText);
doc.Push(paragraph);
```
