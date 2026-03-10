# GetNodes

根据给定的 XPath 从自定义 XML 节点返回节点。

## 语法

```javascript
expression.GetNodes(xPath);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 用于匹配节点的 XPath 表达式。 |

## 返回值

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md)[]

## 示例

此示例演示如何根据特定 XPath 获取节点并显示其值。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo>
    <animal species="Lion" id="101">
        <name>Leo</name>
        <age>5</age>
        <habitat>Savanna</habitat>
        <diet>Carnivore</diet>
    </animal>
</zoo>`;
let xml = xmlManager.Add(xmlText);
let animalNode = xml.GetNodes('/zoo/animal')[0];
let nodes = animalNode.GetNodes("/*");
let paragraph = Api.CreateParagraph();
nodes.forEach(function(node, index) {
    paragraph.AddText(`Node #${index} value: ${node.GetNodeValue()}\r\n`);
});
doc.Push(paragraph);
```
