# UpdateAttribute

更新自定义 XML 节点中现有属性的值。
如果属性不存在，则不会执行更新。

## 语法

```javascript
expression.UpdateAttribute(name, value);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要更新的属性名称。 |
| value | 必需 | string |  | 要分配给属性的新值。 |

## 返回值

boolean

## 示例

此示例演示如何更新自定义 XML 节点中现有属性的值。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book category="house">
        <title lang="en">The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
        <price>30.00</price>
    </book>
</bookstore>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/bookstore/book')[0];
node.UpdateAttribute('category', 'ancient');
let attributes = node.GetAttributes();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Attributes of book node:\r\n");
attributes.forEach((attribute, index) => {
    paragraph.AddText(`Attribute #${index} "${attribute.name}" with value: ${attribute.value}\r\n`);
});
doc.AddElement(0, paragraph);
```
