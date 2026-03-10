# GetFontNames

返回当前运行中所有元素的所有字体名称。

## 语法

```javascript
expression.GetFontNames();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string[]

## 示例

此示例展示如何获取运行中所有元素的所有字体名称。

```javascript editor-docx
// How to get all font names from the ApiRun object elements.

// Get all font names from a text run as an array and display it in the worksheet.

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
