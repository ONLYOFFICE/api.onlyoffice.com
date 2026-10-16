# ReplaceCurrentSentence

用指定文本替换光标处的当前句子或当前句子的一部分。如果光标处没有句子（例如，在空段落中），则在光标位置插入指定文本。

## 语法

```javascript
expression.ReplaceCurrentSentence(text, part);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 用于替换当前句子的文本。 |
| part | 必需 | undefined \| "before" \| "after" |  | 要替换的句子部分。如果省略，则替换整个句子。 |

## 返回值

boolean

## 示例

在演示文稿中将光标所在的句子替换为新文本。

```javascript editor-pptx
// How do I substitute a whole sentence based on the cursor position in a presentation?

// Place the cursor inside the second sentence of a shape and replace the sentence with a new one in a presentation.

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

presentation.ReplaceCurrentSentence("Every slide answers one question.");
```
