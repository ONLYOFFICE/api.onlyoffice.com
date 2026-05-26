# GetXPath

返回当前 XML 节点的绝对 XPath。

## 语法

```javascript
expression.GetXPath();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索文档中嵌入的 XML 数据内特定节点的路径。

```javascript editor-docx
// How do I find the location of a node in embedded XML data in a document?

// Read a node's position to navigate or reference it programmatically in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo xmlns="zoo-namespace">
    <animal>
        <name>Leo</name>
    </animal>
</zoo>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/zoo/animal/name')[0];
let paragraph = Api.CreateParagraph();
paragraph.AddText("xPath: " + node.GetXPath());
doc.Push(paragraph);
```
