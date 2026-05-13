# GetXml

返回当前节点的 XML 字符串。

## 语法

```javascript
expression.GetXml();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档中自定义 XML 节点的 XML 内容。

```javascript editor-docx
// How can I get the xml using a custom XML node in a document?

// Get the xml for a custom XML node in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo>
    <animal species="Lion" id="101">
        <name>Leo</name>
        <age>5</age>
        <habitat>Savanna</habitat>
        <diet>Carnivore</diet>
    </animal>
</zoo>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/zoo')[0];
let paragraph = Api.CreateParagraph();
paragraph.AddText("XML Content: " + node.GetXml());
doc.Push(paragraph);
```
