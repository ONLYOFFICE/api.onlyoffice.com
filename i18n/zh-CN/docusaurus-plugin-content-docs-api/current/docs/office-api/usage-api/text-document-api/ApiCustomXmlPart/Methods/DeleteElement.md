# DeleteElement

删除指定 XPath 的 XML 元素。

## 语法

```javascript
expression.DeleteElement(xPath);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要删除的节点的 XPath。 |

## 返回值

boolean

## 示例

此示例演示如何从自定义 XML 部件删除 XML 元素。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>example_text</text><firstNode>text inside first node</firstNode></content>");
xml.DeleteElement("/content/firstNode");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representation after deletion: " + xml.GetXml());
doc.Push(infoParagraph);
```
