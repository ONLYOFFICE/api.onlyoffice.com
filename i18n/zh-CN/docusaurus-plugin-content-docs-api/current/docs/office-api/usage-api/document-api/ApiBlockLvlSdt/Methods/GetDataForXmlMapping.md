# GetDataForXmlMapping

返回用于 XML 映射的内容控件数据。

## 语法

```javascript
expression.GetDataForXmlMapping();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取控件数据，如同其在文档中映射的 XML 中被填充一样。

```javascript editor-docx
// How can I get the data for xml mapping using a block-level content control in a document?

// Get the data for xml mapping for a block-level content control in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateBlockLvlSdt();
contentControl.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, contentControl);

let data = contentControl.GetDataForXmlMapping();
let paragraph = Api.CreateParagraph();
paragraph.AddText(data);
doc.Push(paragraph);
```
