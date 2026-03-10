# ClearContent

清除当前运行中的内容。

## 语法

```javascript
expression.ClearContent();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例清除运行中的内容。

```javascript editor-docx
// How to delete a text from the run object.

// Remove the text from the run. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("But you will not see it in the resulting document, as it will be cleared.");
paragraph.AddElement(run);
run.ClearContent();
paragraph = Api.CreateParagraph();
run = Api.CreateRun();
run.AddText("The text in the previous paragraph cannot be seen, as it has been cleared.");
paragraph.AddElement(run);
doc.Push(paragraph);
```
