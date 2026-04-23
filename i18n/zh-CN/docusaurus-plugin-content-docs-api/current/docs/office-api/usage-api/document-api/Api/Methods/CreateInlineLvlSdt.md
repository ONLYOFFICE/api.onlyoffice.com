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

此示例向文档添加内联容器。

```javascript editor-docx
// How to create an inline text content control, add a text run to it, and add this container to the document.

// Creates an inline container and adds it to the ApiParagraph class.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
paragraph.Push(inlineLvlSdt);
```
