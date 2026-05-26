# AddText

向当前段落添加文本。

## 语法

```javascript
expression.AddText(text);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要插入到当前文档元素中的文本。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

向 PDF 中的段落添加文本内容。

```javascript editor-pdf
// How do I insert text into a paragraph in a PDF?

// Place text inside a paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);

paragraph.SetJc("left");
paragraph.AddText("This is a text inside the shape aligned left.");
paragraph.AddLineBreak();
paragraph.AddText("This is a text after the line break.");
page.AddObject(shape);
```
