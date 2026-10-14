# ToHtml

将文本范围转换为 HTML。

## 语法

```javascript
expression.ToHtml(options);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | [ToHtmlOptions](../../Enumeration/ToHtmlOptions.md) | \{\} | HTML 转换选项。 |

## 返回值

string

## 示例

在演示文稿中将段落的一部分导出为 HTML 字符串。

```javascript editor-pptx
// How do I get the HTML markup of only a fragment of the text in a presentation?

// Convert the end of a sentence with its bold words to HTML and show the markup in a second paragraph of the shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Convert only ");
const boldRun = paragraph.AddText("this part");
boldRun.SetBold(true);
slide.AddObject(shape);

const range = paragraph.GetTextRange(8, 22);
const html = range.ToHtml({"RenderHTMLTags": true});
const htmlParagraph = Api.CreateParagraph();
htmlParagraph.AddText("HTML output: " + html.trim());
docContent.Push(htmlParagraph);
```
