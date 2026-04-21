# GetPlaceholderText

返回当前内容控件的占位符文本。

## 语法

```javascript
expression.GetPlaceholderText();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档中内容控件的占位符文本。

```javascript editor-docx
// Create a block content control, set the placeholder text to it, and return this placeholder to insert it into the second paragraph of the document.

// How to get the placeholder text from the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Name");
let text = blockLvlSdt.GetPlaceholderText();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + text);
doc.Push(paragraph);
```
