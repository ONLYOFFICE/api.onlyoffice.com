# SetText

用指定文本替换当前文本块的全部文本，同时保留文本块属性。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string \| number[] |  | 文本块的新文本，可以是字符串或字符代码数组。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

在演示文稿中通过一次调用替换文本运行的全部文本。

```javascript editor-pptx
// How do I replace the text of a run without losing its formatting in a presentation?

// Swap the wording of a run on a slide while its formatting stays in place in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetBold(true);
run.SetFontSize(30);
run.AddText("Draft wording.");
paragraph.AddElement(run);
run.SetText("Final wording, still bold.");
slide.AddObject(shape);
```
