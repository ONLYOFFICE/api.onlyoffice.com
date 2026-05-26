# GetClassType

返回 ApiCustomXmlNode 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"customXmlNode"

## 示例

识别文档中自定义 XML 节点对象的类类型。

```javascript editor-docx
// How do I get the class type of a custom XML node in a document?

// Confirm what kind of object a node is before working with it programmatically in a document.

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
let node = xml.GetNodes('/zoo/animal')[0];
let classType = node.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type of the node: " + classType);
doc.Push(paragraph);
```
