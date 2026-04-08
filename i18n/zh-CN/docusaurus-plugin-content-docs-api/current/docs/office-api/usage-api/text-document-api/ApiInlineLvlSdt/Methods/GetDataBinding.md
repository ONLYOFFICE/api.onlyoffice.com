# GetDataBinding

检索内容控件的数据绑定。

## 语法

```javascript
expression.GetDataBinding();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XmlMapping](../../Enumeration/XmlMapping.md)

## 示例

此示例展示如何检索内联内容控件的数据绑定。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
  <pic:text>123</pic:text>
</pic:documentData>`;
let partId = xmlManager.Add(xmlText).GetId();
let contentControl = Api.CreateInlineLvlSdt();
contentControl.SetDataBinding({
  prefixMapping : "xmlns:pic='http://example.com/picture'",
  storeItemID : partId,
  xpath : "/pic:documentData/pic:text"
});
let paragraph = doc.GetElement(0);
paragraph.Push(contentControl);

let dataBinding = contentControl.GetDataBinding();
paragraph = Api.CreateParagraph();
paragraph.AddText(dataBinding.storeItemID);
doc.Push(paragraph);
```
