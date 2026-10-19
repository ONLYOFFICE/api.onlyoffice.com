# ReplaceCurrentWord

用指定文本替换光标处的当前单词或当前单词的一部分。

## 语法

```javascript
expression.ReplaceCurrentWord(text, part);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 用于替换当前单词的文本。 |
| part | 必需 | undefined \| "before" \| "after" |  | 要替换的单词部分。如果省略，则替换整个单词。 |

## 返回值

boolean

## 示例

在演示文稿中将光标处的单词替换为另一个单词。

```javascript editor-pptx
// How do I overwrite a single word based on where the cursor is placed in a presentation?

// Place the cursor inside a word of a shape and swap the word without retyping the rest of the text in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

shape.GetTextRange().SetText("The quick brown cat jumps over the lazy dog");
shape.GetTextRange().MoveCursorToPos(17);

presentation.ReplaceCurrentWord("fox");
```
