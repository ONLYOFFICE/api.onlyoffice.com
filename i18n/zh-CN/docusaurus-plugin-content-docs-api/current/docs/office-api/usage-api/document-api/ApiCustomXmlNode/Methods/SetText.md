# SetText

设置当前 XML 节点的文本内容。

## 语法

```javascript
expression.SetText(str);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| str | 必需 | string |  | 要设置给节点的文本内容。 |

## 返回值

boolean

## 示例

更改文档中嵌入的特定 XML 节点的文本内容。

```javascript editor-docx
// How do I update the plain text inside a node in the XML data stored in a document?

// Correct or refresh the human-readable values in structured XML fields in a document.

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
let node = xml.GetNodes('/bookstore/book/title')[0];
node.SetText('Iliad');
node = xml.GetNodes('/bookstore/book/year')[0];
node.SetText('9th–8th centuries BC');
let paragraph = Api.CreateParagraph();
paragraph.AddText("\r\nContent of custom xml:\r\n");
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);
```
