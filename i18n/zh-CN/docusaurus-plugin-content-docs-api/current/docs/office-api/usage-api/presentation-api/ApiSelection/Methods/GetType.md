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

此示例展示如何在不同场景下获取选择的类型。

```javascript editor-pptx
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

/*

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('This is a text inside black rectangle');
paragraph.Select();

type = selection.GetType();
text += 'Type: ' + type + ' (text selected scenario)\n';

*/

const outShapeFill = Api.CreateSolidFill(Api.RGB(50, 70, 180));
const outShapeStroke = Api.CreateStroke(0, Api.CreateNoFill());
const outShape = Api.CreateShape('rect', 200 * 36000, 30 * 36000, outShapeFill, outShapeStroke);
outShape.SetPosition(0, 20 * 36000);

const outDoc = outShape.GetDocContent();
const outParagraph = outDoc.GetElement(0);
outParagraph.AddText(text);
slide.AddObject(outShape);

```
