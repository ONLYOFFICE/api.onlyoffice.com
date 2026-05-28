# RemoveAllElements

从当前内联文本内容控件中删除所有元素。

## 语法

```javascript
expression.RemoveAllElements();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从文档中的内联内容控件移除所有元素。

```javascript editor-docx
// How do I clear all content from an inline text control in a document?

// Reset a content control to empty when replacing its contents with fresh text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddText("This is an inline text content control.");
inlineLvlSdt.RemoveAllElements();
inlineLvlSdt.AddText("We removed all the inline content control elements.");
```
