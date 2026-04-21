# InsertAttribute

将属性插入指定 XPath 的 XML 节点。

## 语法

```javascript
expression.InsertAttribute(xPath, name, value);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要插入属性的节点的 XPath。 |
| name | 必需 | string |  | 要插入的属性名称。 |
| value | 必需 | string |  | 要插入的属性值。 |

## 返回值

boolean

## 示例

向文档中的自定义 XML 节点插入属性。

```javascript editor-docx
// How to insert the attribute for a custom XML part in a document?

// Insert the attribute and display the result in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
let insertionSuccess = xml.InsertAttribute("/content", "version", "1.0");
let paragraph = Api.CreateParagraph();
paragraph.AddText("XML string representation: " + xml.GetXml());
doc.Push(paragraph);
```
