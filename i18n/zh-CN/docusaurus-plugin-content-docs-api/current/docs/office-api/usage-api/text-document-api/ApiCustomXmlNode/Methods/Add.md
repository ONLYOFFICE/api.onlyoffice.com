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

此示例演示如何创建新子节点并将其作为当前 XML 节点的子节点插入。

```javascript editor-docx
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
