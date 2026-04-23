# GetNodes

根据提供的 XPath 从自定义 XML 检索节点。

## 语法

```javascript
expression.GetNodes(xPath);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 用于搜索节点的 XPath 表达式。 |

## 返回值

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md)[]

## 示例

此示例演示如何更新自定义 XML 节点中属性的值。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/example">
    <text val="123">node text</text>
    <label name="Title">label text</label>
</documentData>`;
let xml = xmlManager.Add(xmlText);
let nodes = xml.GetNodes("/documentData/*");
let label = xml.GetNodes("/documentData/label")[0];
let paragraph = Api.CreateParagraph();
nodes.forEach(node => {
    paragraph.AddText("Node text: " + node.GetText() + "\r\n");
});
paragraph.AddText("Label attribute: " + label.GetAttribute("name"));
doc.Push(paragraph);
```
