# Add

向 XML 管理器添加新的自定义 XML 部件。

## 语法

```javascript
expression.Add(xml);
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xml | 必需 | string |  | 要添加的 XML 字符串。 |

## 返回值

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md)

## 示例

向文档附加新的自定义 XML 部件。

```javascript editor-docx
// How do I add a custom XML part with specific content to a document?

// Embed structured XML data into a document to store metadata alongside the content in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("New XML part added: " + newXml.GetXml());
doc.Push(infoParagraph);
```
