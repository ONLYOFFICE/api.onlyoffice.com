# SetTextFill

设置当前文本块的文本填充。

继承自 [ApiTextPr.SetTextFill](../../ApiTextPr/Methods/SetTextFill.md)。

## 语法

```javascript
expression.SetTextFill(oApiFill);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充文本颜色的颜色或图案。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在文档中用纯色填充文本字符的内部。

```javascript editor-docx
// How do I change the color that fills the inside of letters in a document?

// Paint text with a custom fill so characters display a chosen color in a document.

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
