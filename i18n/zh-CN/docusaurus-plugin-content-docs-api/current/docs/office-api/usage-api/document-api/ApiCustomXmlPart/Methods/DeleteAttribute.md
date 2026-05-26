# DeleteAttribute

从指定 XPath 的 XML 节点删除属性。

## 语法

```javascript
expression.DeleteAttribute(xPath, name);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要从中删除属性的节点的 XPath。 |
| name | 必需 | string |  | 要删除的属性名称。 |

## 返回值

boolean

## 示例

从文档中嵌入的 XML 数据的元素中移除特定属性。

```javascript editor-docx
// How do I strip an unwanted attribute from an XML element stored in a document?

// Clean up obsolete metadata on an element without altering the rest of the XML in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let deletionSuccess = xml.DeleteAttribute('/content', 'version');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representation: " + xml.GetXml());
doc.Push(infoParagraph);
```
