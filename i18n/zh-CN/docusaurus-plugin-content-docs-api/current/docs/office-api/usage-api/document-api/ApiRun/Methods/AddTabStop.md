# AddTabStop

向当前文本块添加制表位。

## 语法

```javascript
expression.AddTabStop();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文本运行中插入一个或多个制表位以在文档中水平对齐内容。

```javascript editor-docx
// How do I add spacing between words using tab stops inside a text run in a document?

// Shift part of a text run to a new horizontal position with tab characters in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. After it three tab stops will be added.");
run.AddTabStop();
run.AddTabStop();
run.AddTabStop();
run.AddText("This is the text which starts after the tab stops.");
paragraph.AddElement(run);
```
