# GetAttributes

返回当前 XML 节点的属性列表。

## 语法

```javascript
expression.GetAttributes();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[CustomXmlNodeAttribute](../../Enumeration/CustomXmlNodeAttribute.md)[]

## 示例

此示例演示如何检索并显示当前 XML 节点的属性列表。

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
let node = xml.GetNodes('/zoo/animal')[0];
let attributes = node.GetAttributes();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Attributes of the animal node:\r\n");
attributes.forEach(function(attribute, index) {
    paragraph.AddText("name:" + attribute.name + ", value: " + attribute.value + "\r\n");
});
doc.Push(paragraph);
```
