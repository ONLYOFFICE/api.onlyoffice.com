# UpdateAttribute

更新指定 XPath 的 XML 节点的属性。

## 语法

```javascript
expression.UpdateAttribute(xPath, name, value);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要更新其属性的节点的 XPath。 |
| name | 必需 | string |  | 要更新的属性名称。 |
| value | 必需 | string |  | 属性的新值。 |

## 返回值

boolean

## 示例

更新文档中自定义 XML 节点的属性值。

```javascript editor-docx
// How can I update attribute using a custom XML part in a document?

// Update attribute for a custom XML part in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
xml.UpdateAttribute("/content", "version", "2.0");
let version = xml.GetAttribute("/content", "version");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);
```
