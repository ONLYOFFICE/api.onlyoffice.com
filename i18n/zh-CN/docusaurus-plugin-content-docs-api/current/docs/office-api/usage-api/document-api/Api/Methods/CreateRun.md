# CreateRun

创建要插入到当前段落或表格中的新的较小文本块。

## 语法

```javascript
expression.CreateRun();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

创建文本块并将其插入文档。

```javascript editor-docx
// Create a run, add a text to it, and insert it into the first paragraph of the document.

// A text run represents a contiguous block of text with the same formatting.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
paragraph.AddElement(run);
```
