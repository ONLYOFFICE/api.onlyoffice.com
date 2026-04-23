# DeleteAttribute

从自定义 XML 节点删除属性。
如果属性存在，它将被移除。

## 语法

```javascript
expression.DeleteAttribute(name);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要删除的属性名称。 |

## 返回值

boolean

## 示例

此示例演示如何从当前 XML 节点删除属性。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book category="house" tag="#123">
        <title lang="en">The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
        <price>30.00</price>
    </book>
</bookstore>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/bookstore/book')[0];
node.DeleteAttribute('category');
let attributes = node.GetAttributes();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml after deletion: " + xml.GetXml());
doc.Push(infoParagraph);
```
