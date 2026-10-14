# GetCurrentSentence

返回光标处的当前句子或当前句子的一部分。

## 语法

```javascript
expression.GetCurrentSentence(part);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| part | 必需 | undefined \| "before" \| "after" |  | 要返回的句子部分。如果省略，则返回整个句子。 |

## 返回值

string

## 示例

在演示文稿中读取光标所在的句子。

```javascript editor-pptx
// How do I get the full sentence the cursor is placed within in a presentation?

// Place the cursor inside the second sentence of a shape and show the sentence in a second paragraph of the shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

shape.GetTextRange().SetText("Slides tell a story. Every slide makes one point. Keep the text short.");
shape.GetTextRange().MoveCursorToPos(25);

const sentence = presentation.GetCurrentSentence();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current sentence: " + sentence);
shape.GetDocContent().Push(paragraph);
```
