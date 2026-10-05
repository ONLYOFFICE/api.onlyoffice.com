# SetOutLine

设置当前文本块的文本轮廓。

继承自 [ApiTextPr.SetOutLine](../../ApiTextPr/Methods/SetOutLine.md)。

## 语法

```javascript
expression.SetOutLine(oStroke);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建文本轮廓的笔画。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在文档中为文本运行的字母绘制可见边框。

```javascript editor-docx
// How do I add an outline stroke around text characters in a document?

// Give text a defined edge by applying a colored outline in a document.

let doc = Api.GetDocument();
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetFontFamily("Comic Sans MS");
let textArt = Api.CreateWordArt(textPr, "onlyoffice", "textWave1", null, null, 0, 1550 * 36000, 50 * 36000);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(textArt);

paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("is the best office suite");
run.SetOutLine(Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51))));
run.SetTextFill(Api.CreateSolidFill(Api.RGB(255, 111, 61)));
paragraph.Push(run);
paragraph.SetJc("center");
textArt.GetContent().Push(paragraph);
```
