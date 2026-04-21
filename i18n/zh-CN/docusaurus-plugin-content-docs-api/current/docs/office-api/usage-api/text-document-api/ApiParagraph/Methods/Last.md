# Last

返回段落的最后一个元素。

## 语法

```javascript
expression.Last();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## 示例

获取文档中段落的最后一个非空元素。

```javascript editor-docx
// How to get the last paragraph in a document.

// Get the last paragraph and make it bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is an Run with text. ");
paragraph.Push(run1);
let run2 = Api.CreateRun();
run2.AddText("And this is the last Run in the paragraph.");
paragraph.Push(run2);
let lastRun = paragraph.Last();
lastRun.SetBold(true);
```
