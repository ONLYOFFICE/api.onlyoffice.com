# GetDataForXmlMapping

返回用于 XML 映射的内容控件数据。

## 语法

```javascript
expression.GetDataForXmlMapping();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取控件数据，如同其在文档中映射的 XML 中被填充一样。

```javascript editor-docx
// How to get the data for xml mapping for an inline content control in a document?

// Get the data for xml mapping and display the result in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateInlineLvlSdt();
contentControl.AddText("This is an inline content control.");
let paragraph = doc.GetElement(0);
paragraph.Push(contentControl);

let data = contentControl.GetDataForXmlMapping();
paragraph = Api.CreateParagraph();
paragraph.AddText(data);
doc.Push(paragraph);
```
