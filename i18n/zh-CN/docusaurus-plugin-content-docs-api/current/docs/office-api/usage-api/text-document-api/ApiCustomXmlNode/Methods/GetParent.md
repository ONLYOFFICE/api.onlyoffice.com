# GetParent

返回当前 XML 节点的父节点。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md) \| null

## 示例

此示例演示如何获取自定义 XML 节点的父节点并显示其值。

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
let rootNode = animalNode.GetParent();
let nullNode = rootNode.GetParent();
let paragraph = Api.CreateParagraph();
paragraph.AddText(`Root node name: ${rootNode.GetNodeName()}; parent of root node: ${nullNode}`);
doc.Push(paragraph);
```
