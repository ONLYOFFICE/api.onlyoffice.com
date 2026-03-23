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

此示例创建一个文本域并将其插入到文档中。

```javascript editor-docx
// Creates a run, adds a text to it, and inserts it into the first paragraph of the document.

// How to create the ApiRun object and adds it to the ApiParagraph class.

// How to add a text to the paragraph.

// How to add a text to the ApiRun object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
paragraph.AddElement(run);
```
