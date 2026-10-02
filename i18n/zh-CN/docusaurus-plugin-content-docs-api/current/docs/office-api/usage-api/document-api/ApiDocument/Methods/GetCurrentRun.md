# GetCurrentRun

返回光标所在的当前文本域。

继承自 [ApiDocumentContent.GetCurrentRun](../../ApiDocumentContent/Methods/GetCurrentRun.md)。

## 语法

```javascript
expression.GetCurrentRun();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

在文档中获取光标位置的文本运行并应用斜体格式。

```javascript editor-docx
// How do I get the run the cursor is currently inside in a document?

// Style only the specific run being edited without affecting the rest of the paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph with example run: ");
let run = Api.CreateRun();
run.AddText('EXAMPLE RUN');
run.SetBold(true);
paragraph.AddElement(run);
run.MoveCursorToPos(0);
let currentRun = doc.GetCurrentRun();
currentRun.SetItalic(true);
paragraph = Api.CreateParagraph();
paragraph.AddText("The current run was set to Bold and Italic");
doc.Push(paragraph);
```
