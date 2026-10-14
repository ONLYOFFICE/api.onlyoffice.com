# ToHtml

将段落转换为 HTML。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.ToHtml(options);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | [ToHtmlOptions](../../Enumeration/ToHtmlOptions.md) | \{\} | HTML 转换选项。 |

## 返回值

string

## 示例

在演示文稿中将段落内容导出为 HTML 字符串以便在编辑器外使用。

```javascript editor-pptx
// How do I get the HTML representation of a paragraph's text and formatting in a presentation?

// Capture the markup of a paragraph inside a shape and show it in a second paragraph of the same shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This paragraph will be converted to ");
const boldRun = paragraph.AddText("HTML");
boldRun.SetBold(true);
const html = paragraph.ToHtml({"RenderHTMLTags": true});
const htmlParagraph = Api.CreateParagraph();
htmlParagraph.AddText("HTML output: " + html.trim());
docContent.Push(htmlParagraph);
slide.AddObject(shape);
```
