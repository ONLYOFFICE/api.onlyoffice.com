# GetById

根据 ID 从 XML 管理器返回自定义 XML 部件。

## 语法

```javascript
expression.GetById(xmlPartId);
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xmlPartId | 必需 | string |  | XML 部件 ID。 |

## 返回值

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md) \| null

## 示例

通过 ID 查找文档中的自定义 XML 部件。

```javascript editor-docx
// How do I get a specific custom XML part using its identifier in a document?

// Read the XML content of the part returned for a given ID in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = "<content xmlns='http://example.com'><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let foundPart = xmlManager.GetById(xmlPart.GetId());
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("XML part: " + foundPart.GetXml());
doc.Push(infoParagraph);
```
