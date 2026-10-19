# GetParent

返回直接包含当前文本块的父元素（段落或内联内容控件）。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

[ParagraphLikeContainer](../../Enumeration/ParagraphLikeContainer.md) \| null \| undefined

## 示例

访问直接包含文本运行的元素。

```javascript editor-docx
// The parent is the paragraph that directly contains the text run.

// Navigate from a run to its parent and apply italic formatting through it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("Example run");
paragraph.AddElement(run);
let parent = run.GetParent();
parent.SetItalic(true);
```
