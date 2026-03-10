# GetAttribute

从自定义 XML 节点检索属性值。
如果属性不存在，则返回 `false`。

## 语法

```javascript
expression.GetAttribute(name);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要检索的属性名称。 |

## 返回值

string \| null

## 示例

此示例演示如何从当前 XML 节点检索属性的值。

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
let species = node.GetAttribute('species');
let id = node.GetAttribute('id');
let paragraph = Api.CreateParagraph();
paragraph.AddText("Attributes of the first animal node:\r\n");
paragraph.AddText(`Species: ${species}\r\n`);
paragraph.AddText(`ID: ${id}\r\n`);
doc.Push(paragraph);
```
