# GetLastRunWithText

返回当前段落中最后一个包含文本的 Run。

## 语法

```javascript
expression.GetLastRunWithText();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

此示例展示如何获取段落中最后一个包含文本的 Run。

```javascript editor-docx
// Get the final text run of the paragraph and show it in the document.

// How to get the paragraph last text element.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
for (let i = 0; i < 5; ++i) {
	let run = Api.CreateRun();
	run.AddText("This run # " + (i + 1));
	paragraph.Push(run);
	paragraph.AddLineBreak();
}
let lastRun = paragraph.GetLastRunWithText();
lastRun.AddText(" Last run.");
```
