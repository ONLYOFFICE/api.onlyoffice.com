# GetDataForXmlMapping

返回用于 XML 映射的内容控件数据。

## 语法

```javascript
expression.GetDataForXmlMapping();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中内容控件的文本，与其在导出的 XML 中显示的完全一样。

```javascript editor-docx
// How do I get the text from a content control in the form used for XML export in a document?

// Extract the plain text value of a content control for use in XML mapping in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateBlockLvlSdt();
contentControl.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, contentControl);

let data = contentControl.GetDataForXmlMapping();
let paragraph = Api.CreateParagraph();
paragraph.AddText(data);
doc.Push(paragraph);
```
