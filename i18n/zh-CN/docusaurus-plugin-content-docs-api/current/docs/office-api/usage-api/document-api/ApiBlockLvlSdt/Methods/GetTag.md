# GetTag

返回当前容器的标签属性。

## 语法

```javascript
expression.GetTag();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中附加到内容控件的标签值。

```javascript editor-docx
// How do I get the tag of a content control in a document?

// Assign a tag to a content control and then display that tag as text in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a tag set to it.");
blockLvlSdt.SetTag("This is a tag.");
doc.AddElement(0, blockLvlSdt);
let tag = blockLvlSdt.GetTag();
let paragraph = doc.GetElement(1);
paragraph.AddText("Tag: " + tag);
```
