# SetSpacingLine

设置段落行距。如果 sLineRule 参数的值为
“atLeast” 或 “exact”，则 nLine 的值将被解释为磅的二十分之一。如果
sLineRule 参数的值为 “auto”，则
nLine 参数的值将被解释为行的 240 分之一。

继承自 [ApiParaPr.SetSpacingLine](../../ApiParaPr/Methods/SetSpacingLine.md)。

## 示例

设置段落的行距以控制文档中行之间的垂直距离。

```javascript editor-docx
// How do I change the line height inside a paragraph in a document?

// Compare different line-spacing modes — automatic, exact, and at-least — applied to separate paragraphs.

let doc = Api.GetDocument();
let myStyle1 = doc.CreateStyle("My document style #1");
let paraPr = myStyle1.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
let myStyle2 = doc.CreateStyle("My document style #2");
paraPr = myStyle2.GetParaPr();
paraPr.SetSpacingLine(200, "exact");
let myStyle3 = doc.CreateStyle("My document style #3");
paraPr = myStyle3.GetParaPr();
paraPr.SetSpacingLine(400, "atLeast");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle1);
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle2);
paragraph.AddText("Paragraph 2. Spacing: exact 10 points.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle3);
paragraph.AddText("Paragraph 3. Spacing: atLeast 20 points.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
```
