# InsertElement

在指定 XPath 插入 XML 元素。

## 语法

```javascript
expression.InsertElement(xPath, xmlStr, index);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 将插入新元素的父节点的 XPath。 |
| xmlStr | 必需 | string |  | 要插入的 XML 字符串。 |
| index | 可选 | number |  | 插入新 XML 元素的位置。如果省略，元素将作为最后一个子元素追加。 |

## 返回值

boolean

## 示例

向文档中的自定义 XML 部件添加新的子元素。

```javascript editor-docx
// How do I insert an XML element at a specific position within a custom XML part in a document?

// Build up an XML structure incrementally by appending or prepending elements in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
xml.InsertElement("/content", "<text>example_text</text>");
xml.InsertElement("/content", "<firstNode>text inside first node</firstNode>", 0);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);
```
