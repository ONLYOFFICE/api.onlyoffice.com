# GetScreenTipText

返回超链接的屏幕提示文本。

## 语法

```javascript
expression.GetScreenTipText();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档中超链接的屏幕提示文本。

```javascript editor-docx
// How to show the screen tip text of the hyperlink in a document.

// Set and display the hyperlink tip text appearing on the screen in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetScreenTipText("ONLYOFFICE for developers");
let screenTipText = hyperlink.GetScreenTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Screen tip text: " + screenTipText);
doc.Push(paragraph);
```
