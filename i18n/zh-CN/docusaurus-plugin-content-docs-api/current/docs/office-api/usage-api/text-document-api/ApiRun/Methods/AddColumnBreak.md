# AddColumnBreak

在当前运行位置添加分栏符，并从新栏开始下一个元素。

## 语法

```javascript
expression.AddColumnBreak();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例在运行位置添加分栏符，并从新栏开始下一个元素。

```javascript editor-docx
// How to add a column break between the text.

// Add text to the text run and separate it with a column break.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection(paragraph);
section.SetEqualColumns(2, 720);
let run = Api.CreateRun();
run.AddText("This is the text for the first column. It is written all in one text run. Nothing special.");
run.AddColumnBreak();
run.AddText("This is the text which starts from the beginning of the second column. ");
run.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
paragraph.AddElement(run);
```
