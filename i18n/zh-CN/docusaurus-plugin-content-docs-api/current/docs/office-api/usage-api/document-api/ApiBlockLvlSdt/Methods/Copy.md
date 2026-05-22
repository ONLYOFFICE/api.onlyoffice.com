# Copy

创建块级内容控件的副本。忽略批注、脚注引用和复杂域。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## 示例

复制内容控件并将副本放入文档中。

```javascript editor-docx
// How do I copy a content control and add the duplicate to the same document?

// Reuse a content control by making an exact copy and appending it elsewhere in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = blockLvlSdt.GetContent().GetElement(0);
paragraph.AddText("This is an block level content control.");
doc.Push(blockLvlSdt);
doc.Push(blockLvlSdt.Copy());
```
