# GetXml

从自定义 XML 部件检索 XML 字符串。

## 语法

```javascript
expression.GetXml();
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何获取自定义 XML 部件的 XML 字符串表示。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/example">
    <text attribute1="attribute1 value">node text</text>
</documentData>`;
let xml = xmlManager.Add(xmlText);
let xmlString = xml.GetXml();

let paragraph = Api.CreateParagraph();
paragraph.AddText("XML string representation: " + xmlString);
doc.Push(paragraph);
```
