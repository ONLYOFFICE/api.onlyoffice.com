# Search

在当前幻灯片中搜索指定文本，并将找到的所有匹配项作为文本范围返回。

## 语法

```javascript
expression.Search(text, isMatchCase, isWholeWords);
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string \| RegExp |  | 要搜索的文本，或要匹配的正则表达式。传递 RegExp 时，将忽略 isMatchCase 和 isWholeWords（改用 "i" 标志控制是否区分大小写）。 |
| isMatchCase | 可选 | boolean | false | 是否区分大小写。 |
| isWholeWords | 可选 | boolean | false | 是否仅搜索全字匹配。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)[]

## 示例

查找单张幻灯片上某个单词的所有匹配项，并将最后一个匹配项设为粗体。

```javascript editor-pptx
// Search is scoped to this slide (including its notes) and returns each match as a text range.

// Add a shape with repeated text, search the slide for a keyword, and embolden the final result.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
shape.GetTextRange().SetText("Sample text with a sample word and one more sample.");

const results = slide.Search("sample");
results[results.length - 1].SetBold(true);
```
