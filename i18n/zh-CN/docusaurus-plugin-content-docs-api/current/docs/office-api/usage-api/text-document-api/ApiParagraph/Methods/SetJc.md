# SetJc

设置段落内容对齐方式。

## 语法

```javascript
expression.SetJc(sJc);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sJc | 必需 | "left" \| "right" \| "both" \| "center" |  | 将应用于段落内容的对齐类型。 |

## 返回值

boolean

## 示例

此示例设置段落内容对齐方式。

```javascript editor-docx
// How to set justification of the paragraph content.

// Change the justification of the paragraph.

let doc = Api.GetDocument();
let myStyleLeft = doc.CreateStyle("My style with left text alignment");
let paraPr = myStyleLeft.GetParaPr();
paraPr.SetJc("left");
let myStyleRight = doc.CreateStyle("My style with right text alignment");
paraPr = myStyleRight.GetParaPr();
paraPr.SetJc("right");
let myStyleCenter = doc.CreateStyle("My style with center text alignment");
paraPr = myStyleCenter.GetParaPr();
paraPr.SetJc("center");
let myStyleBoth = doc.CreateStyle("My style with justify text alignment");
paraPr = myStyleBoth.GetParaPr();
paraPr.SetJc("both");
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the left side. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetStyle(myStyleLeft);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text in it aligned by the right side. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetStyle(myStyleRight);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetStyle(myStyleCenter);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text in it aligned by both sides (justified). ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetStyle(myStyleBoth);
doc.Push(paragraph);
```
