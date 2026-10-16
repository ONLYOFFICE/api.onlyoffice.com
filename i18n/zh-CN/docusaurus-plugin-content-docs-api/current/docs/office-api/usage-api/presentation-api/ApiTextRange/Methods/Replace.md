# Replace

替换此范围内所有出现的指定文本。

## 语法

```javascript
expression.Replace(findWhat, replaceWith, matchCase, wholeWords);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| findWhat | 必需 | string |  | 要搜索的文本。 |
| replaceWith | 必需 | string |  | 替换文本。 |
| matchCase | 可选 | boolean | false | 区分大小写搜索。 |
| wholeWords | 可选 | boolean | false | 仅匹配整个单词。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## 示例

替换文本范围内某个单词的所有匹配项。

```javascript editor-pptx
// Useful for bulk text substitution inside a shape.

// Replace every occurrence of "foo" with "bar".

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("foo bar foo");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.Replace("foo", "bar");
```
