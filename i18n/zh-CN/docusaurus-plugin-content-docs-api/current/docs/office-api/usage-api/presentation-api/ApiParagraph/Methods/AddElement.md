# AddElement

向当前段落添加元素。

## 语法

```javascript
expression.AddElement(oElement, nPos);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | 必需 | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | 将在当前位置添加的文档元素。如果段落不支持 oElement 类型，则返回 false。 |
| nPos | 可选 | number |  | 将添加当前元素的位置。如果未指定此值，则元素将添加到当前段落的末尾。 |

## 返回值

boolean

## 示例

此示例向段落添加文本运行。

```javascript editor-pptx
// Insert a text run to the ApiParagraph object.

// How to add the ApiRun object to the slide.

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

const run = Api.CreateRun();
run.AddText("This is the text for a text run. Nothing special.");
paragraph.AddElement(run);
slide.AddObject(shape);

```
