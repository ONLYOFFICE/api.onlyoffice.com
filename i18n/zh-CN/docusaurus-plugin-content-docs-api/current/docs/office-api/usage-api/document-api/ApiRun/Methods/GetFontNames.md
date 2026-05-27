# GetFontNames

返回当前文本块中所有元素的所有字体名称。

## 语法

```javascript
expression.GetFontNames();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

string[]

## 示例

收集文档中文本运行内使用的所有字体名称。

```javascript editor-docx
// How do I find out which fonts are applied to a text run in a document?

// List every font family assigned to the pieces of a text run in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.SetFontFamily("Calibri Light");
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
let fontNames = run.GetFontNames();
paragraph = Api.CreateParagraph();
paragraph.AddText("Run font names: ");
paragraph.AddLineBreak();
for (let i = 0; i < fontNames.length; i++) {
	paragraph.AddText(fontNames[i]);
	paragraph.AddLineBreak();
}
doc.Push(paragraph);
```
