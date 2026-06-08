# GetText

返回当前节点及其子节点的内部文本。
例如：`\<text\>123\<one\>4\</one\>\</text\>` 返回 `“1234”`。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

提取文档中自定义 XML 节点及其后代的组合文本内容。

```javascript editor-docx
// How do I get the text from a custom XML node in a document?

// Collect all readable text nested inside an XML element, including child nodes, in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo><animal><name>Leo</name>123</animal></zoo>`;
let xml = xmlManager.Add(xmlText);
let animalNode = xml.GetNodes('/zoo/animal')[0];
let nodeText = animalNode.GetText();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Node text: " + nodeText);
doc.Push(paragraph);
```
