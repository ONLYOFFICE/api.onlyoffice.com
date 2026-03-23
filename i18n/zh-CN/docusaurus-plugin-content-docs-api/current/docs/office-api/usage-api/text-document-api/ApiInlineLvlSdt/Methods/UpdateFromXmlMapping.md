# UpdateFromXmlMapping

使用 XML 映射中的值更新内容控件。

## 语法

```javascript
expression.UpdateFromXmlMapping();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何使用数据绑定将数据从自定义 XML 加载到内联内容控件中。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
  <pic:text>123</pic:text>
</pic:documentData>`;
let xmlPart = xmlManager.Add(xmlText);
let contentControl = Api.CreateInlineLvlSdt();
let paragraph = doc.GetElement(0);
paragraph.Push(contentControl);

contentControl.SetDataBinding({
  prefixMapping : "xmlns:pic='http://example.com/picture'",
  storeItemID : xmlPart.GetId(),
  xpath : "/pic:documentData/pic:text"
});

let nodes = xmlPart.GetNodes('/pic:documentData/pic:text');
let node = nodes[0];
node.SetText('987');

contentControl.UpdateFromXmlMapping();

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText(paragraph.GetText());
doc.Push(paragraph2);
```
