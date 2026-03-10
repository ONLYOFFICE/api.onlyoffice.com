# Select

选择当前运行。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例选择当前运行。

```javascript editor-docx
// How to select a text with a cursor.

// Select a run.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
run.Select();
paragraph.AddLineBreak();
paragraph.AddText("The text from the first run was selected.");
```
