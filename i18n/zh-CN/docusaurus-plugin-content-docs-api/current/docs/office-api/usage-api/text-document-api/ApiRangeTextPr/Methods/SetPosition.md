# SetPosition

指定此文本块的文本相对于周围非定位文本的默认
基线升高或降低的量。

继承自 [ApiTextPr.SetPosition](../../ApiTextPr/Methods/SetPosition.md)。

## 示例

指定在文档中此 run 的文本相对于周围非定位文本的默认基线升高或降低的量。

```javascript editor-docx
// How to set an inline position of a text in a document.

// Create a text run object, specify its position to move down or up in a document.

let doc = Api.GetDocument();
let myNewRunStyle1 = doc.CreateStyle("My New Run Style 1", "run");
let textPr1 = myNewRunStyle1.GetTextPr();
textPr1.SetPosition(10);
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle1);
run.AddText("This is a text run with the text raised 5 points (10 half-points). ");
paragraph.AddElement(run);
let myNewRunStyle2 = doc.CreateStyle("My New Run Style 2", "run");
let textPr2 = myNewRunStyle2.GetTextPr();
textPr2.SetPosition(-16);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle2);
run.AddText("This is a text run with the text lowered 8 points (16 half-points).");
paragraph.AddElement(run);
```
