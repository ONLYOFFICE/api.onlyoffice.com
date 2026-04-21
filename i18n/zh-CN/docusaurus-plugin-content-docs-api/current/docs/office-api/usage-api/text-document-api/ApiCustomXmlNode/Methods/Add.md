# Add

为当前 XML 节点创建子节点。

## 语法

```javascript
expression.Add(nodeName);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nodeName | 必需 | string |  | 新子节点的名称。 |

## 返回值

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md)

## 示例

创建新的子节点并将其作为文档中当前 XML 节点的子节点插入。

```javascript editor-docx
// How can I add using a custom XML node in a document?

// Add for a custom XML node in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>Hello World!</text></content>");
let rootNode = xml.GetNodes("/content")[0];
let textNode = rootNode.Add("text");
let classType = textNode.GetClassType();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Class type: " + classType);
doc.Push(infoParagraph);
```
