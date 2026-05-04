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

清除文档中内容控件的内容。

```javascript editor-docx
// Create a block content control, add a text to it, and clear its contents in a document.

// Remove all elements from the block level content control in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.RemoveAllElements();
let paragraph = doc.GetElement(1);
paragraph.AddText("All elements were removed from the content control.");
```
