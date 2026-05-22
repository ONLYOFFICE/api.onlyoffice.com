# GetAll

返回 XML 管理器中的所有自定义 XML 部件。

## 语法

```javascript
expression.GetAll();
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md)[]

## 示例

列出文档中存储的每个自定义 XML 部件。

```javascript editor-docx
// How do I retrieve all custom XML parts at once in a document?

// Iterate over every embedded XML part to audit or process stored data in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText1 = '<products><item><name>Laptop</name><price>999</price></item></products>';
let xmlText2 = '<user><name>John Doe</name><email>john@example.com</email></user>';

let xml1 = xmlManager.Add(xmlText1);
let xml2 = xmlManager.Add(xmlText2);

let allXmlParts = xmlManager.GetAll();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("All custom XML parts: " + allXmlParts.map(xml => xml.GetXml()).join(", "));
doc.Push(infoParagraph);
```
