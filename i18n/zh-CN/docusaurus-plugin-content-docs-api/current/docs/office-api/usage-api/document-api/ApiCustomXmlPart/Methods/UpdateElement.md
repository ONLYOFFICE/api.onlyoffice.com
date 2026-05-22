# UpdateElement

更新指定 XPath 的 XML 元素。

## 语法

```javascript
expression.UpdateElement(xPath, xmlStr);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要更新的节点的 XPath。 |
| xmlStr | 必需 | string |  | 用于替换节点内容的 XML 字符串。 |

## 返回值

boolean

## 示例

替换文档中自定义 XML 部件内 XML 元素的内容。

```javascript editor-docx
// How do I update an existing XML element within a custom XML part in a document?

// Overwrite a child element with new markup to reflect changed data in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>Example</text></content>");
xml.UpdateElement("/content/", "<user>John</user>");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);
```
