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

提取文档中内联内容控件在 XML 映射中显示的文本值。

```javascript editor-docx
// How do I retrieve the XML-mapped data from an inline content control in a document?

// Output the raw control value to verify what would be written to a bound XML store in a document.

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
