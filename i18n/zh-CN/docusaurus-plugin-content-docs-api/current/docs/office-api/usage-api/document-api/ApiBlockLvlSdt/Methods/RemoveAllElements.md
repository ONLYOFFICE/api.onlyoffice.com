# RemoveAllElements

清除当前内容控件的内容。

## 语法

```javascript
expression.RemoveAllElements();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

清除文档中内容控件的所有内容。

```javascript editor-docx
// How do I remove all content from a content control in a document?

// Empty a content control to start fresh with no paragraphs or text inside it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.RemoveAllElements();
let paragraph = doc.GetElement(1);
paragraph.AddText("All elements were removed from the content control.");
```
