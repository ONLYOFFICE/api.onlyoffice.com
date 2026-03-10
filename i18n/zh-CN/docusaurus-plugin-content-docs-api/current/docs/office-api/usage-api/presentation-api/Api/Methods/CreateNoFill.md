# CreateNoFill

创建无填充并移除元素的填充。

## 语法

```javascript
expression.CreateNoFill();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFill](../../ApiFill/ApiFill.md)

## 示例

此示例创建无填充并移除元素的填充。

```javascript editor-pptx
// How to remove background fill from the object.

// Create no fill and apply it to the element.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("The stroke of this shape is transparent.");
slide.AddObject(shape);

```
