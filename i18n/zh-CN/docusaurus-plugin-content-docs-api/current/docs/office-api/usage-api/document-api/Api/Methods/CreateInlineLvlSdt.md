# CreateInlineLvlSdt

创建新的内联容器。

## 语法

```javascript
expression.CreateInlineLvlSdt();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

在文档中插入带有可编辑内容的内联文本容器。

```javascript editor-docx
// How do I add an inline text box that sits inside a paragraph in a document?

// Wrap typed text inside an inline field that flows with the surrounding paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
paragraph.Push(inlineLvlSdt);
```
