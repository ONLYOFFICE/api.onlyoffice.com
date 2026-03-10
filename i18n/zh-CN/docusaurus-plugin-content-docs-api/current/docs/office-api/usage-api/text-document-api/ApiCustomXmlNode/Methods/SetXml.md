# SetXml

设置当前 XML 节点的 XML 内容。

## 语法

```javascript
expression.SetXml(strXml);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| strXml | 必需 | string |  | 要设置为节点内容的 XML 字符串。 |

## 返回值

boolean

## 示例

此示例演示如何获取自定义 XML 节点的 XPath。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book>
        <title lang="en">The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
        <price>30.00</price>
    </book>
</bookstore>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/bookstore/book')[0];
node.SetXml("<book>Updated content</book>");
let paragraph = Api.CreateParagraph();
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);
```
