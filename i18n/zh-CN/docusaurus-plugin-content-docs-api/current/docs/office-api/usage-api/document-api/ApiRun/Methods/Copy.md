# Copy

创建当前文本块的副本。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

复制文本运行并将副本放入文档中的同一段落。

```javascript editor-docx
// How do I reproduce an existing text run and insert it again in a document?

// Clone a run so the same styled text appears twice within a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is just a sample text that was copied. ");
paragraph.AddElement(run1);
let run2 = run1.Copy();
paragraph.AddElement(run2);
```
