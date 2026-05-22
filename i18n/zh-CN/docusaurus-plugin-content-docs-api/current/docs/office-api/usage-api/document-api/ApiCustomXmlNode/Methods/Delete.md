# Delete

删除当前 XML 节点。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从文档中嵌入的自定义 XML 数据移除特定节点。

```javascript editor-docx
// How do I delete a custom XML node in a document?

// Clean up stored XML by eliminating an unwanted element from the tree in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content><text>First</text><text>Second</text></content>');
let textNode = xml.GetNodes('/content/text')[0];
textNode.Delete();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("XML text: " + xml.GetXml());
doc.Push(infoParagraph);
```
