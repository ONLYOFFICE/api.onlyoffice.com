# IsEmpty

如果段落没有内容元素（仅有段落结束标记），则返回 true。

## 语法

```javascript
expression.IsEmpty();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查当前段落是否没有内容元素。

```javascript editor-docx
// Verify that a newly created paragraph reports as empty.

// Confirm the empty state changes once text is added.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let emptyBefore = paragraph.IsEmpty();
paragraph.AddText("This is a sample text.");
let emptyAfter = paragraph.IsEmpty();
doc.Push(paragraph);
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("The paragraph was empty before adding text: " + emptyBefore + ". After adding text: " + emptyAfter + ".");
doc.Push(resultParagraph);
```
