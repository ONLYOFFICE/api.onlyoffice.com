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

此示例演示如何从自定义 XML 部件删除属性。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let deletionSuccess = xml.DeleteAttribute('/content', 'version');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representation: " + xml.GetXml());
doc.Push(infoParagraph);
```
