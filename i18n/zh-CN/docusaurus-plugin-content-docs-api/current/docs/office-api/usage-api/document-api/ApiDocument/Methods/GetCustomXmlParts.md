# GetCustomXmlParts

检索与文档关联的自定义 XML 管理器。
此管理器允许操作和访问文档中的自定义 XML 部件。

## 语法

```javascript
expression.GetCustomXmlParts();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCustomXmlParts](../../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null

## 示例

此示例展示如何获取自定义 XML 管理器、添加新的 XML 部件并通过其 ID 检索它。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = "<content><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let xmlId = xmlPart.GetId();
let retrievedXml = xmlManager.GetById(xmlId);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Retrieved XML: " + retrievedXml.GetXml());
doc.Push(infoParagraph);
```
