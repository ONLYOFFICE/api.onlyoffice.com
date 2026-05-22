# UpdateFromXmlMapping

使用 XML 映射中的值更新内容控件。

## 语法

```javascript
expression.UpdateFromXmlMapping();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

刷新文档中的内容控件以显示更新的 XML 数据。

```javascript editor-docx
// How do I update a content control after its linked XML data changes in a document?

// Change the value in an XML source and pull the new text into a content control in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
  <pic:text>123</pic:text>
</pic:documentData>`;
let xmlPart = xmlManager.Add(xmlText);
let contentControl = Api.CreateBlockLvlSdt();
doc.Push(contentControl);
contentControl.SetDataBinding({
  prefixMapping : "xmlns:pic='http://example.com/picture'",
  storeItemID : xmlPart.GetId(),
  xpath : "/pic:documentData/pic:text"
});
let nodes = xmlPart.GetNodes('/pic:documentData/pic:text');
let node = nodes[0];
node.SetText('987');
contentControl.UpdateFromXmlMapping();

let paragraph = Api.CreateParagraph();
paragraph.AddText(contentControl.GetContent().GetText());
doc.Push(paragraph);
```
