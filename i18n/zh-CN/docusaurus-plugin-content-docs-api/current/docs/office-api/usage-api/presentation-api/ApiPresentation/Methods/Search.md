# Search

在演示文稿中搜索指定文本，并将找到的所有匹配项作为文本范围返回。

## 语法

```javascript
expression.Search(text, isMatchCase, isWholeWords);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string \| RegExp |  | 要搜索的文本，或要匹配的正则表达式。传递 RegExp 时，将忽略 isMatchCase 和 isWholeWords（改用 "i" 标志控制是否区分大小写）。 |
| isMatchCase | 可选 | boolean | false | 是否区分大小写。 |
| isWholeWords | 可选 | boolean | false | 是否仅搜索全字匹配。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)[]

## 示例

在演示文稿中使用字符串和正则表达式查找文本，然后将匹配项设为粗体。

```javascript editor-pptx
// Combine a presentation-wide keyword lookup with a RegExp that matches every numbered label.

// Add a shape with repeated text, bold the last keyword match, then bold each label found by the /№\d+/g expression.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
shape.GetTextRange().SetText("Sample item №1, sample item №2 and one more sample.");

const byKeyword = presentation.Search("sample", false);
byKeyword[byKeyword.length - 1].SetBold(true);

const byRegExp = presentation.Search(/№\d+/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
```
