# RemoveAllElements

从当前段落中移除所有元素。
💡 当从段落中移除所有元素时，将自动创建一个新的空 Run。如果要向此 Run 添加
内容，请使用 [ApiParagraph#GetElement](../../ApiParagraph/Methods/GetElement.md) 方法。

## 语法

```javascript
expression.RemoveAllElements();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例从当前段落中移除所有元素。

```javascript editor-docx
// How to delete the paragraph.

// Delete all ellements from the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the first text run in the current paragraph.");
paragraph.AddElement(run);
paragraph.RemoveAllElements();
run = Api.CreateRun();
run.AddText("We removed all the paragraph elements and added a new text run inside it.");
paragraph.AddElement(run);
doc.Push(paragraph);
```
