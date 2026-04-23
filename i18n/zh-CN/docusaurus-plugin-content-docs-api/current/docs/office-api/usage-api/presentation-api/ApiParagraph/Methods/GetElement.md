# GetElement

使用指定的位置返回段落元素。

## 语法

```javascript
expression.GetElement(nPos);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 要获取其内容的元素必须位于的位置。 |

## 返回值

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## 示例

此示例展示如何使用指定的位置获取段落元素。

```javascript editor-pptx
// How to return an element from the ApiPargaraph object.

// Get an object from the paragraph.

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
paragraph.RemoveAllElements();

let run = Api.CreateRun();
run.AddText("This is the text for the first text run. Do not forget a space at its end to separate from the second one. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("This is the text for the second run. We will set it bold afterwards. It also needs space at its end. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.AddText("This is the text for the third run. It ends the paragraph.");
paragraph.AddElement(run);

run = paragraph.GetElement(2);
run.SetBold(true);
slide.AddObject(shape);

```
