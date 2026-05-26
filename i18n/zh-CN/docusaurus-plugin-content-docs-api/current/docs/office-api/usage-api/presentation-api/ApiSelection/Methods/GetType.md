# GetType

返回当前选择的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiSelection](../ApiSelection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[SelectionType](../../Enumeration/SelectionType.md)

## 示例

识别演示文稿中不同场景下的选区类型。

```javascript editor-pptx
// How do I determine what is selected in a presentation?

// Check the selection type before and after adding a shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const selection = Api.GetSelection();

let type = selection.GetType();
let text = 'Type: ' + type + ' (no selection scenario)\n';

const fill = Api.CreateSolidFill(Api.RGB(0, 0, 0));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 10 * 36000, fill, stroke);
slide.AddObject(shape);
shape.Select();

type = selection.GetType();
text += 'Type: ' + type + ' (shape added scenario)\n';

const outShapeFill = Api.CreateSolidFill(Api.RGB(50, 70, 180));
const outShapeStroke = Api.CreateStroke(0, Api.CreateNoFill());
const outShape = Api.CreateShape('rect', 200 * 36000, 30 * 36000, outShapeFill, outShapeStroke);
outShape.SetPosition(0, 20 * 36000);

const outDoc = outShape.GetDocContent();
const outParagraph = outDoc.GetElement(0);
outParagraph.AddText(text);
slide.AddObject(outShape);
```
