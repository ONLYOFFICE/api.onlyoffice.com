# GetClassType

返回 ApiHyperlink 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"hyperlink"

## 示例

获取文档中超链接对象的类类型。

```javascript editor-docx
// How can I get the class type of a hyperlink in a document?

// Get the class type of a hyperlink and display it in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let classType = hyperlink.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
