# GetNodeName

返回当前 XML 节点的名称。

## 语法

```javascript
expression.GetNodeName();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中自定义 XML 节点的标签名称。

```javascript editor-docx
// How do I get the name of a custom XML node in a document?

// Identify which element you are working with by reading its tag name in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/example">
    <text>Sample text content</text>
</documentData>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes("/documentData/text")[0];
let nodeName = node.GetNodeName();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Node name: " + nodeName);
doc.AddElement(0, paragraph);
```
